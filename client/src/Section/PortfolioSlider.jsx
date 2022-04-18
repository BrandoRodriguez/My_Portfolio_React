import './PortfolioSlider.css'
import CardSlider from '../Components/CardSlider.jsx'
import Button from '../Components/Button.jsx'
import img_arrow from '../assets/images/arrow.png'


const rotate = {
    transform: 'rotate(-180deg)'
};

function PortfolioSlider() {
    return (
        <>

            <div className="portfolio-section-right-container mx-auto">
                <div className="slide-container active">
                    <CardSlider title='JQ Official Store Website Design.'/>
                </div>
                <div className="button flex">
                    <span className="slick-arrow">
                        <img style={rotate} src={img_arrow} alt="Arrow - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" />
                    </span>
                    <span className="slick-arrow">
                        <img src={img_arrow} alt="Arrow - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" />
                    </span>
                </div>
            </div>
            <Button name='See all projects'/>

        </>

    );
}



export default PortfolioSlider;
