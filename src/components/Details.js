import React, { useParams } from 'react';
import axios from 'axios';
import * as qs from 'query-string';

const Details = ({match, location}) => {

    /* const [appState, setAppState] = useState({
      loading: false,
      repos: null,
    }); */

    //   const location = useLocation();
  //  const { repository_name } = useParams();
  let repos;
var x= JSON.stringify(location, null, 2)
    console.log("location.search1",      qs.parse(location.search))
    const apiUrl = 'https://api.github.com/repos/nori-io/common/tags';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      console.log("allRepos is", allRepos)
      repos=allRepos;
      //setAppState({ loading: false, repos: allRepos });
    });
console.log("repos is", repos)
    return (
        <div>
            <h1>Tags is </h1>
          {/*   {repos.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <span className='repo-text'>{repo.name} </span>
            
          
          </li>
        );
      })} */}
      
        </div>
    )
}
export default Details;