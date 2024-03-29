import './CardTestimonial.css'
import Quote from '../assets/images/quote.webp'
import Img_Testmonial from '../assets/images/testimonial.webp'

function CardTestimonial(props) {
    return (
        <>

                <div className="single-testimonial">
                    <div className="content">
                        <img className="quote" src={Quote} alt="Quote - Brando Rodriguez - @brandorodriguez - brandorodriguez.com"  loading="lazy"/>
                        <h2 className='text-white'>t is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of using Lorem Ipsum.
                        </h2>
                        <div className="author">
                            <a href="/" title="View Author Info">Brando Rodriguez</a>
                            <span>CEO at Brezgo</span>
                        </div>
                    </div>
                    <div className="author-img-wrapper animated">
                        <img src={Img_Testmonial} className="author-img" alt="Author_Img - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" loading="lazy"/>
                    </div>
                </div>
    
        </>
    );
}

export default CardTestimonial;