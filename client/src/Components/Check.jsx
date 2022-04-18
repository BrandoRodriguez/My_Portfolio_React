import './Check.css'
import img_check from '../assets/images/check.svg'
function Check(props) {
    return (
        <>
            <div className="flex items-center ctn-check">
                <div className="flex items-center justify-content check">
                    <img src={img_check} alt="check_brandorodriguez" />
                </div>
                <span className="text-sm">{props.check}</span>
            </div>

        </>
    );
}

export default Check;