import logo from '../assets/perventcyberbullying-logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/"><img src={logo} alt="Pervent Cyberbullying Logo" className="navbar-logo" /></Link>
            <ul className="navbar-links">
                <li><Link to="/what-is-cyberbullying">What Is It?</Link></li>
                <li><Link to="/get-help">Get Help</Link></li>
                <li><Link to="/report-prevent">Report & Prevent</Link></li>
                <li><Link to="/stories">Stories</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar