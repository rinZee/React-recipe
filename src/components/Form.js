import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import './Form.css';
import {Link, BrowserRouter as Router} from 'react-router-dom';

const Form = () => {

    const [search, setSearch] = useState("");
    const {setQuery} = useContext(GlobalContext);

    const updateSearch = (e) => {
        setSearch(e.target.value);
      };
    
      const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
      };
    return (
      <Router>
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
    </Router>
    )
}

export default Form
