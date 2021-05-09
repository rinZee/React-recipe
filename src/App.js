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
const APP_ID = '4d34059b';
const APP_KEY = 'c4e4cb59bf1d2fbc104bfec5a64f8eb1';

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    //setRecipes(data.hits);
    setRecipes(data.hits);
    console.log(data.hits);
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
        <Route path='/React-recipe' exact component={Recipes} />
        <Route path='/recipe/:id' exact component={Recipe} />
        </Switch>
    </div>
    </Router>
    </GlobalContext.Provider>
  );
}

export default App;
