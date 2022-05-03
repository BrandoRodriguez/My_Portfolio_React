import './Blog.css'
import CardBlog from "../Components/CardBlog.jsx";
import img_ellipse from '../assets/images/ellipse.webp'
import Arrow from '../Components/Arrow.jsx'
import img_figma from '../assets/images/img-tec/figma.png'


function Blog(props) {
    return (
        <>
            <div className='container-blog'>
                <img src={img_ellipse} className="ellipse" alt="Ellipse - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" />
                <div className="container mx-auto">
                    <div className="blog-wrapper">
                        <div className="single-blog primary">
                            <span className="badge text-s">
                                    <span className="text-s text-white">
                                        new
                                    </span>
                                    Start selling online.
                                </span>
                                <h2 className="text-white text-xl">Pokemon App Stack PERN.</h2>
                                <div className="flex justify-center items-center">
                                    <div className="icon-tec">
                                        <img className="img-icon-tec" src={img_figma} alt="Logo_Tec - Brando Rodriguez - @brandorodriguez - brandorodriguez.com"/>
                                    </div>
                                </div>
                                <p className="text-md">Project Objectives Build an App using React, Redux, Node and Sequelize. </p>
                                <a href="./header/index.html" className="text-white text-md gap flex items-center">See it in action.
                                    <Arrow/>
                                </a>

                        </div>
                        <CardBlog />
                        <CardBlog />
                        <CardBlog />
                    </div>

                </div>
            </div>



        </>
    );
}

export default Blog;