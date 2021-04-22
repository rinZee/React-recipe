import React, { useState, useEffect } from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";
import Recipe from './components/Recipe';
import Form from './components/Form';
import Home from './components/Home';

import {GlobalContext} from './context/GlobalState';
function App() {
  const APP_ID = "4d34059b";
  const APP_KEY = "c4e4cb59bf1d2fbc104bfec5a64f8eb1";
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery]= useState('');

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
        <Router>
      <div className="App">
         <div className="nav-bar">
          <Link to={{ pathname: "/"}}><nav>FoodBook</nav></Link>
          <Form getRecipe={getRecipe}/>
        </div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/recipe' exact component={Recipe} />
          
        </Switch>
    </div>
    </Router>
    </GlobalContext.Provider>
  );
}

export default App;
