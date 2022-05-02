import './CardBlog.css'
import img_crz from '../assets/images/crz.svg'
import img_msg from '../assets/images/msg.svg'
import img_arrow from '../assets/images/arrow.png'
import img_blog from '../assets/images/blog.webp'



function CardBlog(props) {
    return (
        <>
            <div className="single-blog">
                <div>
                    <a href="/" className="featured-img">
                        <img src={img_blog} alt="Blog_Card_Img - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" 
                        loading="lazy" width="370" height="200" />
                    </a>
                    <div className="post-title">
                        <h3><a href="/">Our goal is making your working process faster and easier. </a></h3>
                    </div>
                </div>
                <div className="like-comment">
                    <a href="/" className="read-more ">
                        <img src={img_arrow} alt="Arrow - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" loading="lazy"/>
                    </a>
                    <span className="like">
                        <img className="img-space" src={img_crz} alt="Crz - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" loading="lazy"/>
                        241
                    </span>
                    <span className="comment">
                        <img className="img-space" src={img_msg} alt="Msg - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" loading="lazy"/>
                        236
                    </span>
                </div>
            </div>

        </>
    );
}

export default CardBlog;