import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Link, Redirect } from "react-router-dom";
import { GetRepositories } from '../api/GetRepositories';

function Repos() {
  const [isLoading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);

  let { user } = useParams();


  useEffect(() => {

    GetRepositories(user).then(response => {
      response.map((number) => setRepos(oldArray => [...oldArray, number.name]));

      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="List">Loading...</div>;
  }else if (repos.length===0){
    //return <h2>Repositories not found</h2>
    return <Redirect to="/" />;
  }else {
  return (
    <div className="List">
      <h1>Available Public Repositories:</h1>
      {repos.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <Link to={{
              pathname: "/"+user + "/" + repo,
            }}><span className='repo-description'>{repo}</span></Link>
          </li>
        );
      })}
    </div>
  )}
}

export default Repos;