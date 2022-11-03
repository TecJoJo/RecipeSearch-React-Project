import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

export default function SingleMeal() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [meal, setMeal] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getMeal() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();

        if (data.meals[0]) {
          const {
            strMeal: name,
            strArea: area,
            strCategory: category,
            strInstructions: instruction,
            strMealThumb: img,

            strIngredient1: ingredient1,
            strIngredient2: ingredient2,
            strIngredient3: ingredient3,
            strIngredient4: ingredient4,
            strIngredient5: ingredient5,
            strIngredient6: ingredient6,
            strIngredient7: ingredient7,
            strIngredient8: ingredient8,
            strIngredient9: ingredient9,
            strIngredient10: ingredient10,
          } = data.meals[0];
          const ingredients = [
            ingredient1,
            ingredient2,
            ingredient3,
            ingredient4,
            ingredient5,
            ingredient6,
            ingredient7,
            ingredient8,
            ingredient9,
            ingredient10,
          ];

          const newMeal = {
            name,
            category,
            area,
            instruction,
            img,

            ingredients,
          };

          console.log(newMeal);
          setMeal(newMeal);
        } else {
          setMeal(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getMeal();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!meal) {
    return <h2 className="section-title">no meal to display</h2>;
  } else {
    const { name, area, category, img, ingredients, instruction } = meal;
    return (
      <section className="section meal-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={img} alt={name}></img>
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span> {name}
            </p>
            <p>
              <span className="drink-data">category :</span> {category}
            </p>

            <p>
              <span className="drink-data">area :</span> {area}
            </p>
            <p>
              <span className="drink-data">instructons :</span> {instruction}
            </p>
            <p>
              <span className="drink-data">ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null;
              })}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
