import './Badge.css'
function Badge(props) {
    return (
        <>
            <span className="badge text-s">
                <span className="text-s text-white">
                    new project
                </span>
                {props.badge}
            </span>
        </>
    );
}

export default Badge;