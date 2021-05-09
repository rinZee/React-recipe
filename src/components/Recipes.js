import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';
import Form from './Form';
import './Recipes.css';
const Recipes = () => {
  const {recipes, getRecipe} =useContext(GlobalContext);
    return (
<div>
        <div className="nav-bar">
         <Link to={'/React-recipe'} className='links'><nav>FoodBook</nav></Link>

          <Form getRecipe={getRecipe}/>
          </div>
        <div className="recipes">
     {recipes.map((recipe, index) => (
      <Link to={{
  pathname: `/recipe/${recipe.recipe.label}`,
  state: {recipe},
  }}  className='links'>
        <div className="recipe" key={index}>

       <img src={recipe.recipe.image} alt={recipe.recipe.label} />
       <h1>{recipe.recipe.label}</h1>


       

     </div>
     </Link>

      )) }
     
    </div>
    </div>

    )
}

export default Recipes
