import { Switch, Route } from 'react-router-dom';
import Repos from '../Repos';
import Home from '../Home';
import Tags from '../Tags';

import List from '../Repos';

export default function Main () {
  
 
  return(
  <div>
 
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/:user' component={List}/>
      <Route exact path='/:user/:repo' component={Tags}/>
     </Switch>
   </div>
)}

