import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const Meal = ({ img, name, id, category }) => {
  const { setSearchTerm } = useGlobalContext();

  const restoreMenu = () => {
    setSearchTerm("a");
  };
  return (
    <article className="meal">
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="meal-footer">
        <h3>{name}</h3>
        <h4>category: {category}</h4>

        <Link
          to={`/meal/${id}`}
          className="btn btn-primary btn-details"
          onClick={restoreMenu}
        >
          details
        </Link>
      </div>
    </article>
  );
};

export default Meal;
