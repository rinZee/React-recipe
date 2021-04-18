import React from "react";
import "./Recipe.css";
export default function Recipe({ title, calories, image, ingredients}) {
  const showDescription = () => {
    
  }
  return (
    <div className="recipe" onClick={showDescription}>
      <img src={image} alt="" />
      <h1>{title}</h1>
      
      
      
    </div>
  );
}
