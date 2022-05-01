import './Card.css'
import Badge from './Badge.jsx'
import Arrow from './Arrow.jsx'
import Tec from './Tec.jsx';
import { Link } from 'react-router-dom';

// import img_react from '../assets/images/img-tec/react.webp'
// import img_node from '../assets/images/img-tec/node.webp'

function Card(props) {
    return (
        <>
            <div className="single-portfolio">
                <div className="img-area">
                    <span className="count ">{props.number}</span>
                    {/* <picture>
                        <source srcset={props.img_mb} media="(max-width: 414px)" />
                        <img srcset={props.img} alt="portfolio_img - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" />
                    </picture> */}
                    <img src={props.img} alt="portfolio_img - Brando Rodriguez - @brandorodriguez - brandorodriguez.com"
                        loading="lazy" width="768" height="432" />

                </div>
                <div className="portfolio-content">
                    <Badge badge={props.badge} />
                    <h2 className="text-white text-xl">{props.title}</h2>
                    <div className="cnt-icon-tec flex justify-center items-center">
                        <Tec tec='PostgreSQL' />
                        <Tec tec='Express' />
                        <Tec tec='React' />
                        <Tec tec='Node' />
                    </div>
                    <p className="text-md">{props.information}</p>
                    <a href="/" className="text-white text-md flex gap items-center">
                        See it in action.
                        <Link to={props.rute}>
                            <Arrow />
                        </Link>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;
