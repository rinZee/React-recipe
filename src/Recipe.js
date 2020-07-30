import React from "react";
import "./Recipe.css";
export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <p>
        <b>Calories: </b>
        {calories}{" "}
      </p>
      <img src={image} alt="" />
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
}
