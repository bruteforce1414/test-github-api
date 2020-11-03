import { Link, useHistory, Route, Switch } from 'react-router-dom';
import React, { useState } from "react";
import {GetRepositories} from '../api/GetRepositories';
import List from './List';
import Details from './Details';


import withListLoading from './withListLoading';

export default function Home (){
  const history = useHistory()

  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

   const handleSubmit  = async (e) => {
    e.preventDefault();
      let repos = await GetRepositories(value);
    console.log("repos from GetRepositories  is", repos)
    setAppState({ loading: true, repos: repos });
    
  }

  if (appState.loading===false)
{
  console.log("appState.loading===false")
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
  
)}
else{
  console.log("appState.loading===true", appState.loading)
 
return (
  <ListLoading isLoading={appState.loading} repos={appState.repos} />

 /*  <Switch> 
  <Route path="/details" render={(props) => <Details {...props} />}/>
  </Switch>  */
)}
}

