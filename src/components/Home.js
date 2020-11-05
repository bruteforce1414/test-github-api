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
    repos: null,
    err: error,
  });

  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("e.target.value", value)
    let user = await GetUser(value);
    console.log("user", user)
    if (user !== undefined) {
      history.push("/" + value);

    }
    //  setAppState({ loading: false, repos: repos });

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
    console.log("appState.loading===true", appState.loading)
    return (
      <ListLoading isLoading={appState.loading} repos={appState.repos} />

      /*  <Switch> 
       <Route path="/details" render={(props) => <Details {...props} />}/>
       </Switch>  */
    )
  }
}

export default Home;
