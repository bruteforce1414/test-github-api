import React from 'react';
import { Link } from "react-router-dom";

const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available Public Repositories</h2>
      {repos.map((repo) => {
        return (
          <li key={repo.id} className='list'>
            <span className='repo-text'>{repo.name} </span>
            
            <Link to={{
              pathname: '/details',
              search: "repository="+repo.name
            }}><span className='repo-description'>{repo.url}</span></Link>
          </li>
        );
      })}
    </ul>
  );
};
export default List;