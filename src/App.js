import React, { useEffect, useState } from 'react';
import "./App.css";
import Form from './components/Form';
import Recipes from './components/Recipes'

function App() {
  const APP_ID = "4d34059b";
  const APP_KEY = "c4e4cb59bf1d2fbc104bfec5a64f8eb1";
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }; 
    return (
     
        <div className="section">
            <div className="nav-bar">
  <nav>FoodBook</nav>
    <Form getRecipe={getRecipe}/>
    <Recipes recipes={recipes}/>
    </div>
    

    
     </div>

  
  

  );
}

export default App;
