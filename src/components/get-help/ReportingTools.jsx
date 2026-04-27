import "./CrisisTemplate.css"
import "./images.css"
import reportCyberbullying from "../../assets/get-help-images/reportCyberbullying.png"
import { Link } from "react-router-dom"

export default function ReportingTools() {
    return (
        <section>
            <img src={reportCyberbullying} alt="Report Bullying" className="reportBully-img"/>
            <h2>Report Cyberbullying</h2>

            <h3 className="reporting-heading">Before You Report : </h3>
            <ul className="reporting-list">
                <li><strong>Take screenshots</strong> — capture all messages, posts, or images related to the bullying.</li><br />
                <li><strong>Save the messages</strong> — don't delete any conversations, even if they're upsetting.</li><br />
                <li><strong>Note the dates and times</strong> — record when each incident happened.</li><br />
                <li><strong>Report on the platform</strong> — see our <Link to="/report-prevent">Report &amp; Prevent</Link> page for step-by-step guides on reporting through Instagram, Snapchat, Discord, and X.</li>
            </ul>

            <h3 className="reporting-heading">Free for Students : </h3>
            <ul className="reporting-list">
                <li><strong><a href="https://www.stopbullying.gov" target="_blank" rel="noopener noreferrer">StopBullying.gov</a></strong> — Official U.S. government resource with guidance on how to report cyberbullying to schools, social media platforms, and law enforcement.</li><br />
                <li><strong><a href="https://www.cybersmile.org" target="_blank" rel="noopener noreferrer">Cybersmile Foundation</a></strong> — Free online support and chat for cyberbullying victims, available anytime.</li><br />
                <li><strong><a href="https://www.report-it.org.uk" target="_blank" rel="noopener noreferrer">ReportIt</a></strong> — A free anonymous reporting tool students can use directly without school involvement.</li>
            </ul>

            <h3 className="reporting-heading">School-Based Tools (requires school subscription) : </h3>
            <ul className="reporting-list">
                <li><strong><a href="https://www.stopitsolutions.com/solutions/anonymous-reporting-system" target="_blank" rel="noopener noreferrer">STOPit</a></strong> — A mobile app that lets students anonymously report bullying, threats, or misconduct directly to school administrators in real time.</li><br />
                <li><strong><a href="https://www.anonymousalerts.com/anonymous-reporting-system/" target="_blank" rel="noopener noreferrer">Anonymous Alerts®</a></strong> — A web and app-based tip system where students can submit anonymous reports via text, web form, or app; used widely by K-12 schools.</li><br />
                <li><strong><a href="https://antibullyingsoftware.com/" target="_blank" rel="noopener noreferrer">BRIM</a></strong> — A school safety platform that manages bullying reports from submission through resolution, helping staff track and respond to incidents.</li><br />
                <li><strong><a href="https://www.fortresgrand.com/products/bully-button/bully-button.htm" target="_blank" rel="noopener noreferrer">Bully Button</a></strong> — A desktop tool for school computers that gives students a quick, discreet way to flag bullying incidents to staff.</li>
            </ul>

            <p>Source: <a href="https://www.thecyberhelpline.com/guides/online-harassment-usa" target="_blank" rel="noopener noreferrer">The Cyber Helpline</a></p>
        </section>
        
        

    )
}