import "./CrisisHotline.css"

export default function CrisisHotline() {
    return (
        <section>
            <div className="crisis-banner">
                <p className="crisis-banner-text">Are you in crisis right now?</p>
                <a href="tel:988" className="crisis-btn">Call or Text 988 Now</a>
            </div>
            <h1>Get Help / Resources</h1>
            <h2>Crisis Hotlines</h2>
            <p>
                If you or a loved one are experiencing immediate distress from cyberbullying,
                call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline) in the US/Canada.
                For youth, text <strong>"HOME"</strong> to <strong>741741</strong> to connect with
                the <a href="https://www.crisistextline.org" target="_blank" rel="noopener noreferrer">Crisis Text Line</a>, or contact the <a href="https://www.stompoutbullying.org/helpchat" target="_blank" rel="noopener noreferrer">Stomp Out Bullying HelpChat Line</a>. These
                services are free, confidential, and available 24/7.
            </p>
        </section>
    )
}