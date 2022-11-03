import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { meals } = data;

      if (meals) {
        const newMeals = meals.map((meal) => {
          const {
            idMeal: id,
            strMeal: name,
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
          } = meal;

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

          return { id, name, category, instruction, img, ingredients };
        });

        setMeals(newMeals);
      } else {
        setMeals([]);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ loading, meals, setSearchTerm, setMeals }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
