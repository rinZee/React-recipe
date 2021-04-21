import React, {useState} from 'react'
import './Recipe.css';

const Form = () => {

    const [search, setSearch] = useState("");

    const updateSearch = (e) => {
        setSearch(e.target.value);
      };
    
      const getSearch = (e) => {
        e.preventDefault();
        //setQuery(search);
        setSearch("");
      };
    return (
           <form className='search-form'  onSubmit={getSearch}>
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

    )
}

export default Form
