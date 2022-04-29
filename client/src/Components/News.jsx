import './News.css'
import Badge from './Badge.jsx'

function News(props) {
    return (
        <>
            
                <div>
                    <Badge badge={props.badge} />
                    <h3 className="text-sm">
                        {props.name}
                    </h3>
                </div>
           
        </>
    );
}

export default News;