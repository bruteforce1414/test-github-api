import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Details from './components/Details';

import withListLoading from './components/withListLoading';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'https://api.github.com/users/nori-io/repos';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      console.log("allRepos is", allRepos)
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);
 
 
  return (
    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <Router>
      <Switch> 

      <Route path="/details" render={(props) => <Details {...props} />}/>
      </Switch> 

      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by 
        </div>
      </footer>
      </Router>

    </div>
  );
}
export default App;