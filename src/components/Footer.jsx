import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-brand">
                    <h3>GWDOAT</h3>
                    <p>Everyone should have a safe experience online.</p>
                </div>

                <div className="footer-mission">
                    <h4>Our Mission</h4>
                    <p>
                        Raising awareness to fight cyberbullying
                    </p>
                </div>

                <div className="footer-help">
                    <h4>Need Help Now?</h4>
                    <p>National Helpline: <strong>1-800-273-8255</strong></p>
                    <p>Crisis Text Line: <strong>Text HOME to 741741</strong></p>
                </div>

            </div>

            <p className="footer-copy">
                &copy; {new Date().getFullYear()} GWDOAT. All rights reserved.
            </p>
        </footer>
    )

}