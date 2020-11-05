import React, { useEffect, useState } from 'react';
import './App.css';
import Details from './components/Details';

import List from './components/List';

import withListLoading from './components/withListLoading';
import axios from 'axios';
import {Route, Link, Switch } from "react-router-dom";
import Main from './components/common/Main';
import Header from './components/common/Header';


function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });
 
  return (
    <div>
    <Header />
    <Main />



     {/*  <Router>
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
 */}
    </div>

  );
}


export default App;