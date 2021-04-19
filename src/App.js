import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

function App() {
  const APP_ID = "4d34059b";
  const APP_KEY = "c4e4cb59bf1d2fbc104bfec5a64f8eb1";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [searchHistory, setSearchHistory] = useState("");
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

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearchHistory(search);
    setSearch("");
  };

  
  return (
    <div className="App">
      <div className="nav-bar">
    <nav>FoodBook</nav>
      
      {searchHistory ? <form className='search-form'  onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder='Find a recipe'
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form> : ''
  }
      </div>
      {searchHistory ? '' : <form className='search-form center'  onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder='Find a recipe'
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
  }
      {searchHistory ? <h2>Showing search results for {searchHistory}</h2> : ''}
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
