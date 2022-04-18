import './Nav.css'
import img_logo from '../assets/images/logo.png'

const right ={
    width: '100px'
};

function Nav() {
    return (
        <>
        
            <nav className="relative">
                <div className="header">
                    <a className="logo" href="/" style={right} >
                        <img src={img_logo} alt="logo - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" />
                    </a>
                    <div className="nav-hidden">
                        <ul className="nav flex items-baseline space">
                            <li><a className="text-white text-sm" href="/">About</a></li>
                            <span>
                            </span>
                            <li><a className="text-white text-sm" href="/">Skills</a></li>
                            <span>
                            </span>
                            <li><a className="text-white text-sm" href="/">Projects</a></li>
                            <span>
                            </span>
                            <li><a className="text-white text-sm" href="/">Resources</a></li>
                            <span>
                            </span>
                            <li><a className="text-white text-sm" href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <a class="btn btn-header text-white text-sm " href="/">Resume</a>
                    <div class="humbarger btn-hidden">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Nav;

