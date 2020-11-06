import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { GetTags } from '../api/GetTags';

function Tags  () {

    let location = useLocation();
    console.log("location in Tags", location.pathname)
    var arrayOfStrings = (location.pathname).split("/");
    console.log("arrayOfStrings", arrayOfStrings)

    const [isLoading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);


  useEffect(() => {

    GetTags(location.pathname).then(response => {
      console.log("response in tags",)
      response.map((number) => setRepos(oldArray => [...oldArray, number.name]));

      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="List">Loading...</div>;
  }


return(
    <div className="List">
    <li><Link to={"/"+arrayOfStrings[1]}>{"/"+arrayOfStrings[1]}</Link></li>

      <h1>Tags:</h1>
      {repos.map((repo) => {
        return (
          <li key={repo.id} className='list'>         
            <Link to={{
              pathname: location.pathname+"/"+repo,
            }}><span className='repo-description'>{repo}</span></Link>
          </li>
        );
      })}
    </div>
)
}

export default Tags;