import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <footer>
            <button onClick={scrollToTop}><FontAwesomeIcon icon={faAnglesUp} /></button>
            <div className="footer_links">
                <a href="https://www.linkedin.com/in/sergeyfru/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.facebook.com/sn.fruman" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://github.com/sergeyfru" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
            <div className="info-box">
                <div className="footnote">
                    SERGEY FRUMAN &copy; 2024
                </div>
            </div>
        </footer>
    )
}

export default Footer;