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

            <br /><p>
                For LGBTQ+ youth, contact the <strong>Trevor Project</strong> at{" "}
                <strong>1-866-488-7386</strong> or text <strong>"START"</strong> to{" "}
                <strong>678-678</strong>. Available 24/7.
            </p>

            <br /><p>
                To report online child exploitation or abuse, call the{" "}
                <strong>CyberTipline</strong> at <strong>1-800-843-5678</strong>.
            </p>

            <p>
                For mental health support, call the{" "}
                <strong>SAMHSA Helpline</strong> at <strong>1-800-662-4357</strong>.
                Free, confidential, and available 24/7.
            </p>

            <h3>
              <table className="hotline-table">
                <thead>
                  <tr>
                    <th>Hotline</th>
                    <th>Contact</th>
                    <th>Hours</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>988 Crisis Lifelife</td>
                    <td>Call or text 988</td>
                    <td>24/7</td>
                  </tr>
                  <tr>
                    <td>Trevor Project</td>
                    <td>1-866-488-7386</td>
                    <td>24/7</td>
                  </tr>
                  <tr>
                    <td>CyberTipLife</td>
                    <td>1-800-843-5678</td>
                    <td>24/7</td>
                  </tr>
                  <tr>
                    <td>SAMHSA Helpline</td>
                    <td>1-800-662-4357</td>
                    <td>24/7</td>
                  </tr>
                  <tr>
                    <td>Stomp Out Bullying</td>
                    <td>HelpChat Line</td>
                    <td>Mon-Fri, 2pm-5pm ET</td>
                  </tr>
                </tbody>
              </table>
            </h3>

        </section>
    )
}