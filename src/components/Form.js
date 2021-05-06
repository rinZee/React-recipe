import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { BrowserRouter as Router, Link} from 'react-router-dom';

import './Form.css';

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
<Link to={'/recipes'} className='links'>
      Search
      </Link>
</button>

    </form> 
    </Router>
    )
}

export default Form
