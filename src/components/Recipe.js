import React from "react";
import "./Recipe.css";


export default function Recipe({ title, image, onClick}) {

  return (
    <div className="recipe" onClick={onClick}>
      <img src={image} alt="" />
      <h1>{title}</h1>
      
      
      
    </div>
  );
}
