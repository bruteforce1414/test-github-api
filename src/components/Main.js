import { Switch, Route } from 'react-router-dom';
import Repos from './Repos';
import Home from './Home';
import Tag from './Tag';




const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/:user/' component={Repos}/>
      <Route exact path='/:user/:repo' component={Tag}/>
  

{/*       <Route exact path='/:repo/:tags' component={Tags}/>
 */}    </Switch>
  </main>
)

export default Main;