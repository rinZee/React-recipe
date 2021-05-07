import React, { useState, useEffect } from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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
      <GlobalContext.Provider value={{setQuery, recipes, getRecipe}}>
        <Router>
      <div className="App">
         
        <Switch>
        <Route path='/' exact component={Recipes} />
        <Route path='/recipe/:id' exact component={Recipe} />
        </Switch>
    </div>
    </Router>
    </GlobalContext.Provider>
  );
}

export default App;
