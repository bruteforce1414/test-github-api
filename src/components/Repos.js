import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Link } from "react-router-dom";
import { GetRepositories } from '../api/GetRepositories';

function Repos() {
  const [isLoading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);

  let location = useLocation();

  useEffect(() => {

    GetRepositories(location.pathname).then(response => {
      response.map((number) => setRepos(oldArray => [...oldArray, number.name]));

      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="List">Loading...</div>;
  }

  return (
    <div className="List">
      <h1>Available Public Repositories:</h1>
      {repos.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <Link to={{
              pathname: location.pathname + "/" + repo,
            }}><span className='repo-description'>{repo}</span></Link>
          </li>
        );
      })}
    </div>
  );
}

export default Repos;