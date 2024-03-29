import './Resources.css'
import CardResource from "../Components/CardResource.jsx";
import img_resource from '../assets/images/img-projects/pokemon.webp'

function Resources() {
    return (
        <>
            <div className="container-resources container mx-auto ">
                <div className="card-resource-primary">
                    <a href="/">
                    <img src={img_resource} alt="portfolio_img - Brando Rodriguez - @brandorodriguez - brandorodriguez.com"
                        loading="lazy" width="768" height="432" />
                        <div className="hero-content">
                            <span className="badge text-s">
                                <span className="text-s text-white">
                                    news
                                </span>
                                Start selling online.
                            </span>
                            <h3 className="text-xl text-white">
                                JQ Official Store Website Design.
                            </h3>
                        </div>
                    </a>
                </div>
                <ul className="container-resources-articles">
                    <CardResource />
                    <CardResource />
                    <CardResource />
                </ul>
            </div>
        </>
    );
}

export default Resources;