import React, { useContext } from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';

import './Recipes.css';
const Recipes = () => {
  const {recipes} =useContext(GlobalContext);
    return (
      <Router>
        <div className="recipes">
     {recipes ? recipes.map((recipe, index) => (
       <div className="recipe" key={index}>
       <img src={recipe.recipe.image} alt="" />
       <h1>{recipe.recipe.label}</h1>
       <Link to={{ pathname: "/recipe"}}>View Recipe</Link>
       
     </div>
        
      )) : <h1>No results</h1>}
      
    </div>
    </Router>
    )
}

export default Recipes
