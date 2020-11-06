import React, { useEffect, useState } from 'react';
import './App.css';

import List from './components/Repos';

import withListLoading from './components/withListLoading';
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
    </div>
  );
}


export default App;