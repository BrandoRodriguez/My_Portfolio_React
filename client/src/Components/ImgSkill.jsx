import './ImgSkill.css'
import img_skill from '../assets/images/img-projects/pokemonslider.webp'


function Imgskill() {
    return (
        <>
            <img className="flex mx-auto skill-img" src={img_skill} alt="dk-hero" loading="lazy" width="960" height="540"/>
        </>
    );
}

export default Imgskill;