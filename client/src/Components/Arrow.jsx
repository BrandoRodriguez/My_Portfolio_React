import './Arrow.css'
import img_arrow from '../assets/images/arrow.png'

function Arrow() {
    return (
        <>
            <span className="link-btn">
                <img src={img_arrow} alt="Arrow - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" loading="lazy"
                 width="20" height="13"/>
            </span>
        </>
    );
}

export default Arrow;