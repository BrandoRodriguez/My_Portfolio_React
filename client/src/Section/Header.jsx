import './Header.css'
import News from '../Components/News.jsx'
import img_brandorodriguez from '../assets/images/brandorodriguez.webp'
import img_hello from '../assets/images/hello.svg'
import img_greeting from '../assets/images/greeting.webp'


function Header() {
    return (
        <>

            <div className="relative container mx-auto bottom">
                <div className="presentation-walper flex items-center justify-content">
                </div>
                <div className="presentation-img flex items-center justify-content relative">
                    <img className="flex mx-auto" src={img_brandorodriguez} alt="Img_Perfil - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" />
                </div>
                <div className="presentation-description flex items-center justify-content">
                    <div className="presentation-description-img">
                        <img src={img_greeting} alt="Greeting - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" />
                    </div>
                    <div className="presentation-content">
                        <h2 className='text-white'>
                            Hi! I’m
                        </h2>
                        <img src={img_hello} alt="Name_Perfil - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" />
                        <h2 className='text-white'>
                            Full Stack Developer
                        </h2>
                    </div>
                </div>
                <>
                <News/>
                </>
                <h2 class="section-title top">projects</h2>
            </div>


        </>
    );
}

export default Header;