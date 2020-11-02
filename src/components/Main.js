import { Switch, Route } from 'react-router-dom';
import Repos from './Repos';
import Home from './Home';
import Tag from './Tag';
import React, { useState } from "react";




export default function Main () {
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("you have searched for - " + value);
    // or you can send to backend
  };
 
  return(
  <div>
  <form>
        <input value={value} onChange={handleChange}/>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/:user/' component={Repos}/>
      <Route exact path='/:user/:repo' component={Tag}/>
  

   </Switch>
   </div>
)}

