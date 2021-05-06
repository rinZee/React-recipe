import React, { useState, useEffect } from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";
import Form from './components/Form';
import Recipes from './components/Recipes';
import Recipe from './components/Recipe';

import {GlobalContext} from './context/GlobalState';
function App() {
  
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery]= useState('');

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&maxFat=25&number=10&apiKey=281cd092160d4e149fb0cc2614165ad6`
    );
    const data = await response.json();
    //setRecipes(data.hits);
    setRecipes(data.results);
  }; 

  useEffect(() => {
    getRecipe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
 
    return (
      <GlobalContext.Provider value={{setQuery, recipes}}>
        <Router>
      <div className="App">
         <div className="nav-bar">
         <Link to={'React-recipe/'} className='links'><nav>FoodBook</nav></Link>
         <Link to={`/React-recipe/f`} className='links'><p>hello</p></Link>

          <Form getRecipe={getRecipe}/>
        </div>
        <Switch>
        <Route path='/React-recipe/:id' exact component={Recipe} />
        <Route path='/React-recipe' exact component={Recipes} />

        </Switch>
    </div>
    </Router>
    </GlobalContext.Provider>
  );
}

export default App;
