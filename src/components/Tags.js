import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { GetTags } from '../api/GetTags';


export default function Tags() {

    const [isLoading, setLoading] = useState(true);
    const [tags, setTags] = useState([]);
    const { user, repo } = useParams();

    useEffect(() => {
        GetTags(user, repo).then(response => {
            response.map((number) => setTags(oldArray => [...oldArray, number.name]))
            setLoading(false);
        });
    }, [])

    if (isLoading) {
        return <div className="List">Loading...</div>;
    }

    if (tags.length !== 0) {
        return (
            <div className="List">
                <Link to={"/" + user}>{"/" + user}</Link>
                <h2>Tags of repository {repo}:</h2>
                {tags.map((tag) => {
                    return (
                        <li className='summary' key={tag}>{tag}</li>
                    );
                })}
            </div>
        )
    } else {
        return (
            <div>
                <Link to={"/" + user}>{"/" + user}</Link>
                <h2>No tags in repository {repo}</h2>
            </div>
        )
    }
}

