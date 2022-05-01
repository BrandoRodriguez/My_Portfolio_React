import './Header.css'
import News from '../Components/News.jsx'
import img_brandorodriguez from '../assets/images/brandorodriguez.webp'
import img_hello from '../assets/images/hello.svg'
import img_greeting from '../assets/images/greeting.webp'
import Arrow from '../Components/Arrow.jsx'
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>

            <div className="relative container mx-auto">
                <div className="presentation-walper flex items-center justify-content">
                    <img className="presentation-img flex mx-auto" src={img_brandorodriguez} alt="Img_Perfil - Brando Rodriguez - @brandorodriguez - brandorodriguez.com"
                        width="417" height="442"
                    />                    
                </div>
                <div className="presentation-description flex items-center justify-content">
                    <div className="presentation-description-img">
                        <img src={img_greeting} alt="Greeting - Brando Rodriguez - @brandorodriguez - brandorodriguez.com"
                            width="41" height="41" />
                    </div>
                    <div className="presentation-content">
                        <h2 className='text-white'>
                            Hi! I’m
                        </h2>
                        <img src={img_hello} alt="Name_Perfil - Brando Rodriguez - @brandorodriguez - brandorodriguez.com"
                            width="130" height="23" />
                        <h2 className='text-white'>
                            Full Stack Developer
                        </h2>
                    </div>
                </div>
                <>

                    <div className="news news-one flex items-center text-white">
                        <div>
                            <Link to="/project-pokemon">
                                <Arrow />
                            </Link>
                        </div>
                        <News
                            badge='Pokemon App'
                            name='Pokemon app, backend and frontend.'
                        />
                    </div>
                    <div className="news news-thwo flex items-center text-white">
                        <div>
                            <Link to="/project-pokemon">
                                <Arrow />
                            </Link>
                        </div>
                        <News
                            badge='Dogs App'
                            name='Dog breeds app, backend and frontend.'
                        />
                    </div>
                    <div className="news news-three flex items-center text-white">
                        <div>
                            <Link to="/project-pokemon">
                                <Arrow />
                            </Link>
                        </div>
                        <News
                            badge='Shop App'
                            name='ECommerce | Layout, Design, & Styling.'
                        />
                    </div>

                </>
                <h2 class="section-title top">projects</h2>
            </div>


        </>
    );
}

export default Header;