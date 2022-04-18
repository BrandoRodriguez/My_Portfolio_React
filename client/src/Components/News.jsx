import './News.css'
import Badge from './Badge.jsx'
import Arrow from './Arrow.jsx'

function News(props) {
    return (
        <>
            <div className="news news-one flex items-center text-white">
                <div>
                    <Arrow/>
                </div>
                <div>
                    <Badge badge='Modern Shop'/>
                    <h3 className="text-sm">
                        ECommerce | Layout, Design, & Styling.
                    </h3>
                </div>
            </div>
        </>
    );
}

export default News;