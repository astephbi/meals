import React from "react";
import "./Card.css";

const Card = ({ meal }) => {
  return (
    <div className="container">
      <h2> {meal.strIngredient1} </h2>
      <img src={meal.strMealThumb} alt={meal.strArea} />
      <p>{meal.strInstructions} </p>
      <button>
        <a href={meal.strYoutube}>Youtube it</a>
      </button>
    </div>
  );
};

export default Card;
