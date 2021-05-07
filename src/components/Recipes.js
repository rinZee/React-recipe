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
         <Link to={'/'} className='links'><nav>FoodBook</nav></Link>

          <Form getRecipe={getRecipe}/>
          </div>
        <div className="recipes">
     {recipes.map((recipe, index) => (

        <div className="recipe" key={index}>
<Link to={`/recipe/${recipe.id}`} className='links'>
       <img src={recipe.image} alt={recipe.title} />
       <h1>{recipe.title}</h1>
       </Link>


       

     </div>

      )) }
     
    </div>
    </div>

    )
}

export default Recipes
