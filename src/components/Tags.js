import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Tags  () {

    let location = useLocation();
    var arrayOfStrings = (location.pathname).split("/");
    console.log("arrayOfStrings", arrayOfStrings)

return(
    <div>
        <li><Link to={"/"+arrayOfStrings[1]}>{"/"+arrayOfStrings[1]}</Link></li>

        <ul>
            <li>
                v1
          </li>

            <li>
                v2
          </li>

            <li>
                v3
          </li>
        </ul>
    </div>
)
}

export default Tags;