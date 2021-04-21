import React from 'react';
import Recipe from './Recipe';
import './Recipes.css';
const Recipes = ({recipes}) => {
    return (
        <div className="recipes">
     {recipes.map((recipe, index) => (
        <Recipe
          key={index}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
        /> 
      ))}
      
    </div>
    )
}

export default Recipes
