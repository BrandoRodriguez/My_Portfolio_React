import './ImgSkill.css'
import img_skill from '../assets/images/img-projects/henry.png'


function Imgskill(props) {
    return (
        <>
            <img className="flex mx-auto skill-img" src={img_skill} alt="dk-hero" loading="lazy"/>
        </>
    );
}

export default Imgskill;