import { Link } from 'react-router-dom';
import React, { useState } from "react";
import {GetRepositories} from '../api/GetRepositories';

export default function Home (){
  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

   const handleSubmit  = async (e) => {
    e.preventDefault();
    //alert("you have searched for - " + value);
    // or you can send to backend
    let repos = await GetRepositories(value);
    console.log("repos from GetRepositories  is", repos)
    //let result = await promise; 
  }


  return (
  <div>
     <form>
      <input value={value} onChange={handleChange} />
      <button onClick={handleSubmit} type="submit">
        Submit
        </button>
    </form>
    <li>
      <Link to="/nori-io">Nori-io repos</Link>
    </li>
   
  </div>
)
}

