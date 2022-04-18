import ButtonCss from './Button.module.css'
function Button(props) {
    return (
        <>
            <div className="flex justify-content">
                <a className={ButtonCss.btn} href="/">
                    {props.name}
                    {/* <img src={props.img} alt="Arrow - Brando Rodriguez - @brandorodriguez - brandorodriguez.com"/> */}
                </a>
            </div>
        </>
    );
}

export default Button;