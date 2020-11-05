import React, { useEffect, useState } from 'react';
import { traverseTwoPhase } from 'react-dom/test-utils';
import { Link } from "react-router-dom";
import { GetRepositories } from '../api/GetRepositories';

function List() {
  const [isLoading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
var repos;
  useEffect(() => {
    GetRepositories().then(response => {
      
      //  repos=response;  
    response.map((number) => setPokemon(oldArray => [...oldArray, number.url]));  
    console.log("RESPONSE IS", response);
    console.log("POKEMON IS", pokemon);
   setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="List">Loading...</div>;
  }

  return (
    <div className="List">
      <h1>repos is</h1>
      {pokemon.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <span className='repo-text'>{repo} </span>

            <Link to={{
              pathname: '/details',
              search: "repository=" + repo
            }}><span className='repo-description'>{repo}</span></Link>
          </li>
        );
      })}
{/*       <img alt={pokemon.name} src={pokemon.sprites.front_default} />
 */}    </div>
  );
}

/* 
render(){
  return (
    <ul>
      <h2 className='list-head'>Available Public Repositories</h2>
      {this.state.data.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <span className='repo-text'>{repo.name} </span>

            <Link to={{
              pathname: '/details',
              search: "repository=" + repo.url
            }}><span className='repo-description'>{repo.url}</span></Link>
          </li>
        );
      })}
    </ul>
  );
    }
}; */

export default List;