import React, {useState} from "react";
import "./Recipe.css";


export default function Recipe() {
const [value, setValue] = useState('hello');


  return (
     <div>
       <h1>{value}</h1>
     </div>
     
  );
}
