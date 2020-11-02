import { Link } from 'react-router-dom';

const Tag = () => (
    <div>
        <li><Link to='/nori-io'>User</Link></li>

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

export default Tag;