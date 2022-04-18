import CardSliderCss from './CardSlider.module.css'
import Badge from './Badge.jsx'
import Arrow from './Arrow.jsx'
import img_ecomerce from '../assets/images/img-projects/pokemonslider.png'
import img_figma from '../assets/images/img-tec/figma.png'


function CardSlider(props) {
    return (
        <>

            <div className={CardSliderCss.portfolio_content}>
                <Badge badge='Modern Shop' />
                <h2 className="text-white text-xxx">{props.title}</h2>
                <div className="flex justify-center items-center">
                    <div className={CardSliderCss.icon_tec}>
                        <img className={CardSliderCss.icon_tec_img} src={img_figma} alt="Logo_Tec - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" />
                    </div>
                </div>
                <p className={CardSliderCss.portfolio_content_p}>WooCommerce. Hub provides all the tools you need to start selling online. Let
                    your customers to experience WooCommerce at its absolute-best.</p>
                <a href="/" className="text-white text-md flex gap items-center">See it in action.
                    <Arrow />
                </a>
            </div>
            <div className={CardSliderCss.portfolio_img}>
                <img loading="lazy" src={img_ecomerce} alt="Portfolio_Img - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" />
            </div>

        </>

    );
}

export default CardSlider;