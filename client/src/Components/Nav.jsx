import './Nav.css'
import img_logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';

const right = {
    width: '90px'
};

function Nav() {
    return (
        <>
            <section className='navbar-section'>
                <nav className="relative">
                    <div className="header">
                        <Link className="logo" to="/" style={right} >
                            <img src={img_logo} alt="logo - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" 
                            />
                        </Link>
                        <div className="nav-hidden">
                            <ul className="nav flex items-baseline space">
                                <li><Link className="text-white text-sm" to="/">About</Link></li>
                                <span>
                                </span>
                                <li><Link className="text-white text-sm" to="/">Skills</Link></li>
                                <span>
                                </span>
                                <li><Link className="text-white text-sm" to="/">Projects</Link></li>
                                <span>
                                </span>
                                <li><Link className="text-white text-sm" to="/">Resources</Link></li>
                                <span>
                                </span>
                                <li><Link className="text-white text-sm" to="/">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <Link class="btn btn-header text-white text-sm " to="/">Resume</Link>
                        <div class="humbarger btn-hidden">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}

export default Nav;

