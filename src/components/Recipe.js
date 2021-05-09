import React from "react";
import "./Recipe.css";
import {useLocation} from 'react-router-dom';

export default function Recipe() {
  const location = useLocation();

const {recipe} =location.state.recipe;

  return (
     <div className='description'>
        <img src={recipe.image} alt={recipe.label} />
       <h1>{recipe.label}</h1>
       <h2>Ingredients</h2>
       {recipe.ingredientLines.map((ingredient) => (
         <p>{ingredient}</p>
       ))
       }
     </div>
     
  );
}
