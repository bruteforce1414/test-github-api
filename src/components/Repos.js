import { Link} from 'react-router-dom';


const Repos = () => (
    <div>
          <ul>
          <li>
            <Link to="/nori-io/common">Common</Link>
          </li>
          <li>
            <Link to="/nori-io/interfaces">Interfaces</Link>
          </li>
          <li>
            <Link to="/nori-io/norictl">norictl</Link>
          </li>
        </ul>
    </div>
)

export default Repos;