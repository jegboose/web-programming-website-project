import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-mission">
                    <h4>Our Mission</h4>
                    <p>
                        Raising awareness to fight cyberbullying
                    </p>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: <a href="mailto:support@GWDOAT.org">support@GWDOAT.org</a> </p>
                </div>

                <div className="footer-help">
                    <h4>Need Help Now?</h4>
                    <p>National Helpline: <strong>1-800-273-8255</strong></p>
                    <p>Crisis Text Line: <strong>Text HOME to 741741</strong></p>
                </div>

            </div>

            <p className="footer-copy">
                &copy; {new Date().getFullYear()} GWDOAT. All rights reserved. | Last Updated: April 23, 2026
            </p>

            <Link to="/accessibility">Accessibility Statement</Link>
        </footer>
    )

}