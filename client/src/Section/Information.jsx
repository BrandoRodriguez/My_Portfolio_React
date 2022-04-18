import './Information.css'
import Badge from '../Components/Badge.jsx'
import Button from '../Components/Button.jsx'
import Check from '../Components/Check.jsx'
import img_1 from '../assets/images/img-tec/1.svg'
import img_2 from '../assets/images/img-tec/2.svg'
import img_3 from '../assets/images/img-tec/3.svg'
import img_4 from '../assets/images/img-tec/4.svg'


function Information(props) {
    return (
        <>

            <div className="container mx-auto overflow">
                <h2 className="section-title text-center">{props.title}</h2>
                <h2 className="bg-title">
                    {props.bgtitle}
                </h2>
                <div className="ctn-content">
                    <div className="justify-content flex">
                        <Badge badge='modern shop' />
                    </div>
                    <h2 className="text-white">
                        {props.subtitle}
                    </h2>
                    <h2 className="text-white color">
                        {props.subtitlecolor}
                    </h2>
                    <p className="text-center ">Award-winning collection. Install any demo or template with a single click.
                        You can mix and match all the demos and templates. Every demo can be turned into one or multi-page
                        with
                        the
                        shopping features.
                    </p>
                    <div className="information-check justify-content mx-auto gap" >
                        <Check check={props.check1}/>
                        <Check check={props.check2}/>
                        <Check check={props.check3}/>
                    </div>
                    <div className="flex justify-content gap top bottom">
                        <img src={img_1} alt="" />
                        <img src={img_2} alt="" />
                        <img src={img_3} alt="" />
                        <img src={img_4} alt="" />
                    </div>
                    <div className="flex justify-content mx-auto gap">
                        <Button name={props.name} />
                        <Button name='Contact me' />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Information;
