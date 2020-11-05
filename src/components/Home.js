import { Link, useHistory, Route, Switch } from 'react-router-dom';
import React, { useState, useNavigate } from "react";
import { GetUser } from '../api/GetUser';
import List from './List';
import Details from './Details';


import withListLoading from './withListLoading';

const Home = props => {
  const history = useHistory()

  const ListLoading = withListLoading(List);
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
    console.log("e.target.value", value)
    let user = await GetUser(value);
    setAppState({loading:false})
    console.log("user", user)
    if (user !== undefined) {
      history.push("/" + value);
    }
    else{
      setAppState({error:true})
    }

  }

  if (appState.error===true){
    return (
      <div>
        <form>
          <input value={value} onChange={handleChange} />
          <button onClick={handleSubmit} type="submit">
            Submit
        </button>
        </form>
        <h2>User not exist!!!</h2>

      </div>)
  }

  if (appState.loading === false) {
   
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
  else {
    
    return (
      <div>

      <form>
      <input disabled={appState.loading} value={value} onChange={handleChange} />
      <button disabled={appState.loading} onClick={handleSubmit} type="submit">
        Submit
    </button>
    </form>
      <h1>Loading...</h1>
      </div>
     )
  }
}

export default Home;
