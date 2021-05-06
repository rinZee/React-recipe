import React, { useContext } from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';

import './Recipes.css';
const Recipes = () => {
  const {recipes} =useContext(GlobalContext);
    return (

      <Router>
        <div className="recipes">
     {recipes.map((recipe, index) => (

        <div className="recipe" key={index}>

       <img src={recipe.image} alt="" />
       <h1>{recipe.title}</h1>
       <Link to={`/React-recipe/f`} className='links'><p>why not working</p></Link>


       

     </div>

      )) }
     
    </div>
    </Router>
    )
}

export default Recipes
