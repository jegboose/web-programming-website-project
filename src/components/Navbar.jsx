import logo from '../assets/perventcyberbullying-logo.webp'
import { RxAccessibility } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <nav className="navbar">
                <Link to="/"><img src={logo} alt="Pervent Cyberbullying Logo" className="navbar-logo" width="147" height="80" /></Link>
                <ul className="navbar-links">
                    <li><Link to="/" aria-label="Home"><FaHome /></Link></li>
                    <li><Link to="/what-is-cyberbullying">What Is It?</Link></li>
                    <li><Link to="/get-help">Get Help</Link></li>
                    <li><Link to="/report-prevent">Report & Prevent</Link></li>
                    <li><Link to="/stories">Stories</Link></li>
                    <li><Link to="/accessibility" aria-label="Accessibility"><RxAccessibility /></Link></li>

                </ul>
            </nav>
        </>

    )
}

export default Navbar
