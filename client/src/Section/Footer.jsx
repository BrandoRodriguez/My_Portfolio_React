import './Footer.css'
import img_logo from '../assets/images/logo.png'
function Footer(props) {
    return (
        <>
            <div className="container-footer">
                <a className="logo" href="/">
                    <img src={img_logo} alt="logo - Brando Rodriguez - @brandorodriguez - brandorodriguez.com" />
                </a>
                <p className="text-sm">
                    <span>&copy; 2022 Brando Rodriguez.</span>
                    <span>All rights reserved.</span>
                </p>
            </div>
        </>
    );
}

export default Footer;