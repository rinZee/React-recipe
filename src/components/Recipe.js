import React from "react";
import "./Recipe.css";
import Description from '../pages/Description';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Recipe({id, title, image}) {

  return (
   <Router> 
     <div className="recipe">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <Link to="/description">View recipe</Link>
      <Switch>
      <Route path="/description">
          <Description title={title} image={image}/>
      </Route>
      </Switch>
      
    </div>
 </Router>
  );
}
