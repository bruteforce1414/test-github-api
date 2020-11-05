import { Switch, Route } from 'react-router-dom';
import Repos from '../Repos';
import Home from '../Home';
import Tag from '../Tag';

import List from '../List';



export default function Main () {
  
 
  return(
  <div>
 
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/:user' component={List}/>
      <Route exact path='/:user/:repo' component={Tag}/>
  

   </Switch>
   </div>
)}

