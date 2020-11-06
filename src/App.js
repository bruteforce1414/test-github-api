import React, { useEffect, useState } from 'react';
import './App.css';

import List from './components/Repos';

import Main from './components/common/Main';
import Header from './components/common/Header';


function App() {
 
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}


export default App;