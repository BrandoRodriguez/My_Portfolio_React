import './Card.css'
import Badge from './Badge.jsx'
import Arrow from './Arrow.jsx'
import img_figma from '../assets/images/img-tec/figma.png'

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
                    <img src={props.img} alt="portfolio_img - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" loading="lazy" />

                </div>
                <div className="portfolio-content">
                    <Badge badge={props.badge} />
                    <h2 className="text-white text-xl">{props.title}</h2>
                    <div className="flex justify-center items-center">
                        <div className="icon-tec">
                            <img src={img_figma} alt="Logo_Tec - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" loading="lazy" />
                        </div>
                    </div>
                    <p className="text-md">{props.information}</p>
                    <a href="/" className="text-white text-md flex gap items-center">
                        See it in action.
                        <Arrow />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;
