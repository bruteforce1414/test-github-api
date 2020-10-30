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
var x= JSON.stringify(location, null, 2)
    console.log("location.search1",      qs.parse(location.search))
    

    return (
        <div>
            <h1>Profile</h1>
        </div>
    )
}
export default Details;