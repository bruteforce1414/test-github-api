import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { GetTags } from '../api/GetTags';
import axios from "axios";


export default function Tags() {

   
   const [isLoading, setLoading] = useState(true);
    const [tags, setTags] = useState([]);
    const { user, repo } = useParams();
   // const [tags, setTags] = useState();


    async function GetTags(user, repo) {

        const apiUrl = "https://api.github.com/repos/" + user+"/"+repo+ "/tags";
    
        const response= await axios.get(apiUrl)
            await response;
            console.log("RESPONSE IS", response);
           // await response.data;
           console.log("RESPONSE.DATA IS", response.data);

           response.data.map((number) => setTags(oldArray => [...oldArray, number.name]));
          //  (setTags(response));

           
    }
    

    useEffect(() => {

             GetTags(user, repo)
           /*   .then(response => {
            response.map((number) => setTags(oldArray => [...oldArray, number.name]));
          //  (setTags(response));
            setLoading(false);
        }
        ); */
    }, []);

    return(
        <details>
        <div className="summary">{tags}</div>
        
      </details>
    )

   /*  if (isLoading) {
        return <div className="List">Loading...</div>;
    }

    if (tags.length !== 0) {
        return (
            
            <div className="List">
                <Link to={"/" + user}>{"/" + user}</Link>
                <h2>Tags of repository {repo}:</h2>
                {tags.map((tag) => {
                    return (
                        <li key={tag.id} className='list'>
                            {tag}
                        </li>
                    );
                })}
            </div>
        )
    }
    else {
        return (
            <div>
                <li><Link to={"/" + user}>{"/" + user}</Link></li>

                <h2>No tags in repository {repo}</h2>
            </div>
        )
    } */
}

