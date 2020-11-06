import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { GetTags } from '../api/GetTags';

function Tags() {

    let location = useLocation();
    var arrayOfStrings = (location.pathname).split("/");
    const [isLoading, setLoading] = useState(true);
    const [tags, setTags] = useState([]);


    useEffect(() => {

        GetTags(location.pathname).then(response => {
            response.map((number) => setTags(oldArray => [...oldArray, number.name]));

            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return <div className="List">Loading...</div>;
    }

    if (tags.length !== 0) {
        return (
            <div className="List">
                <Link to={"/" + arrayOfStrings[1]}>{"/" + arrayOfStrings[1]}</Link>
                <h1>Tags:</h1>
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
                <li><Link to={"/" + arrayOfStrings[1]}>{"/" + arrayOfStrings[1]}</Link></li>

                <h2>No tags in repository {arrayOfStrings[2]}</h2>
            </div>
        )
    }
}

export default Tags;