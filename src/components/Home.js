import { Link, useHistory, Route, Switch } from 'react-router-dom';
import React, { useState, useNavigate } from "react";
import { GetUser } from '../api/GetUser';
import List from './Repos';

const Home = props => {
  const history = useHistory()

  const [appState, setAppState] = useState({
    loading: false,
    err:false,
  });

  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    setAppState({loading:true})
    e.preventDefault();
    let user = await GetUser(value);
    setAppState({loading:false})
    if (user !== undefined) {
      setAppState({error:false})

      history.push("/" + value);

    }
    else{
      setAppState({error:true, loading:false})
      
    }

  }

  
    return (
      <div>
        <form>
          <input disabled={appState.loading} value={value} onChange={handleChange} />
          <button disabled={appState.loading} onClick={handleSubmit} type="submit">
            Submit
        </button>
        </form>
        <h2 hidden={!appState.loading}>Loading...</h2>
        <h2 hidden={!appState.error}>User not exist!!!</h2>
        
      </div>)
  }

  


export default Home;
