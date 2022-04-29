import './News.css'
import Badge from './Badge.jsx'
import Arrow from './Arrow.jsx'
import { Link } from 'react-router-dom';

function News(props) {
    return (
        <>
            
                <div>
                    <Link to="/project-dogs">
                        <Arrow />
                    </Link>
                </div>
                <div>
                    <Badge badge={props.badge} />
                    <h3 className="text-sm">
                        {props.name}
                    </h3>
                </div>
           
        </>
    );
}

export default News;