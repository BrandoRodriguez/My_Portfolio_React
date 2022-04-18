import ButtonCss from './Button.module.css'
function Button(props) {
    return (
        <>
            <div className="flex justify-content">
                <a className={ButtonCss.btn} href="/">
                    {props.name}
                </a>
            </div>
        </>
    );
}

export default Button;