import CardSliderCss from './CardSlider.module.css'
import Badge from './Badge.jsx'
import Arrow from './Arrow.jsx'
import img_ecomerce from '../assets/images/img-projects/pokemonslider.webp'
import Tec from '../Components/Tec.jsx'


function CardSlider(props) {
    return (
        <>

            <div className={CardSliderCss.portfolio_content}>
                <Badge badge='Pokemon App' />
                <h2 className="text-white text-xxx">{props.title}</h2>
                <div className="cnt-icon-tec flex justify-center items-center">
                    <Tec tec='PostgreSQL' />
                    <Tec tec='Express' />
                    <Tec tec='React' />
                    <Tec tec='Node' />
                </div>
                <p className={CardSliderCss.portfolio_content_p}>Project Objectives Build an App using React, Redux, Node and Sequelize. Affirm and connect the concepts learned in the race. Learn best practices. Learn and practice the GIT workflow. Use and practice testing.</p>
                <a href="/" className="text-white text-md flex gap items-center">See it in action.
                    <Arrow />
                </a>
            </div>
            <div className={CardSliderCss.portfolio_img}>
                <img src={img_ecomerce} alt="Portfolio_Img - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" loading="lazy" width="960" height="540"/>
            </div>

        </>

    );
}

export default CardSlider;