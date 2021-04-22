import React, { useContext } from 'react';
import Recipe from './Recipe';
import {GlobalContext} from '../context/GlobalState';

import './Recipes.css';
const Recipes = () => {
  const {recipes} =useContext(GlobalContext);
    return (
      
        <div className="recipes">
     {recipes.map((recipe, index) => (
        <Recipe
          key={index}
          id={index}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
        /> 
      ))}
      
    </div>
    )
}

export default Recipes
