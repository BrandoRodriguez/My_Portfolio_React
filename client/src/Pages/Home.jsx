import './Home.css'
import Nav from '../Components/Nav.jsx';
import Header from '../Section/Header.jsx';
import Portfolio from "../Section/Portfolio.jsx";
import Information from "../Section/Information.jsx";
import PortfolioSlider from '../Section/PortfolioSlider';
import Testimonial from '../Section/Testimonial';
import Button from '../Components/Button.jsx';
import Skill from '../Section/Skill.jsx';
import Blog from '../Section/Blog.jsx';
import Img_shape from '../assets/images/shape.svg';
import Img_shape_rotate from '../assets/images/shape-rotate.svg';

const rotate = {
    transform: 'rotate(-180deg)'
};

function Home(props) {
    return (
        <>
            <div className="background-noise"></div>

            <div className='container-vertical-linea'>
                <span class="vertical-linea line1"></span>
                <span class="vertical-linea line2"></span>
                <span class="vertical-linea line3"></span>
                <span class="vertical-linea line4"></span>
                <span class="vertical-linea line5"></span>
            </div>

            <section className="header-section">
                <Nav />
                <section className='presentation-section'>
                    <Header />
                </section>
            </section>

            <section className="portfolio-section">
                <Portfolio />
            </section>

            <section className="portfolio-information-section">
                <div className="container mx-auto">
                    <Information
                        title='New projects every week.'
                        bgtitle='WEB'
                        subtitle='Experience the top notch performance.'
                        subtitlecolor='Real and challenging projects.'
                        check1='Web design'
                        check2='Web layout'
                        check3='Logic functionality'
                    />
                </div>
            </section>

            <section className="portfolio-section-right">
                <PortfolioSlider />
            </section>

            <Testimonial />

            <section className="skill-information-section">
                <Information
                    title='Specialize and never stop learning.'
                    bgtitle='SKILL'
                    subtitle='Skills Learned by Tech Industry Leaders'
                    subtitlecolor='Real and challenging projects.'
                    check1='Web design'
                    check2='Web layout'
                    check3='Logic functionality'
                />
                <div class="section-bottom-shape">
                    <img src={Img_shape} alt="shape_brandorodriguez" />
                </div>
            </section>

            <section class="skill-section" >
                <Skill />
                <Button name='See all projects' />
            </section>

            <section className="blog-information-section">
                <div class="section-bottom-shape">
                    <img style={rotate} src={Img_shape_rotate} alt="shape_brandorodriguez" />
                </div>
                <Information
                    title='New projects every week.'
                    bgtitle='BLOG'
                    subtitle='Experience the top notch performance.'
                    subtitlecolor='Real and challenging projects.'
                    check1='Web design'
                    check2='Web layout'
                    check3='Logic functionality'
                />
            </section>
            <section class="blog-section">
                <Blog/>
            </section>

            <section className="portfolio-information-section">
                <Information
                    title='Specialize and never stop learning.'
                    bgtitle='CODE'
                    subtitle='Skills Learned by Tech Industry Leaders'
                    subtitlecolor='Real and challenging projects.'
                    check1='Web design'
                    check2='Web layout'
                    check3='Logic functionality'
                />
            </section>

        </>

    );
}

export default Home;
