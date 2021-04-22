import React, { useEffect, useState, useContext } from 'react';
import "./App.css";
import Form from './components/Form';
import Recipes from './components/Recipes';

import {GlobalContext} from './context/GlobalState';
function App() {
  const APP_ID = "4d34059b";
  const APP_KEY = "c4e4cb59bf1d2fbc104bfec5a64f8eb1";
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery]= useState('apple');

  useEffect(() => {
     getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }; 
    return (
      <GlobalContext.Provider value={{setQuery, recipes}}>
      <div className="App">
         <div className="nav-bar">
          <nav>FoodBook</nav>
          <Form getRecipe={getRecipe}/>
        </div>
        <Recipes />
    </div>
    </GlobalContext.Provider>
  );
}

export default App;
