// Homepage — coded as directed
// Overview of the site's mission, key stats about cyberbullying, and quick links to help resources

import { Helmet} from "react-helmet";
import { Link } from 'react-router-dom'
import '../styles/HomePage.css'

const pages = [
    {to: '/what-is-cyberbullying', label: 'What is it?', desc: 'Learn what cyberbullying is, the types, and its effects.'},
    {to: '/get-help', label: 'Get Help', desc: 'Find resources and support if you or someone you know is being bullied.'},
    {to: '/report-prevent', label: 'Report & Prevent', desc: 'Learn how to report cyberbullying and tips on how to prevent it.'},
    {to: '/stories', label: 'Stories', desc: 'Read real stories from people who have experienced cyberbullying and expert articles on cyberbullying' },

]

export default function HomePage() {
  return (
      <>
          <Helmet>
              <title>Prevent Cyberbullying - Everyone Should Have a Safe Experience Online</title>
              <meta name="description" content="Learn what cyberbullying is, find help, and discover how to report and prevent it." />
          </Helmet>

        <main id="main-content">

          <section className="home-hero">
            <h1>Prevent Cyberbullying</h1>
              <p className="home-tagline">Everyone should have a safe experience online.</p>
              <Link to='/get-help' className="home-cta">Get Help Now</Link>
          </section>

            <section className="home-stats">
                <div className="stat-card">
                    <span className="stat-number">2x</span>
                    <span className="stat-label">more likely to experience anxiety and depression</span>
                </div>
                <div className="stat-card">
                    <span className="stat-number">64%</span>
                    <span className="stat-label">of bullied students say it affects their ability to learn</span>
                </div>
                <p className="stat-source">
                    Sources: <a href="https://www.samhsa.gov" target="_blank" rel="noopener noreferrer">SAMHSA</a>,{' '}
                    <a href="https://cyberbullying.org/2025-cyberbullying-data" target="_blank" rel="noopener noreferrer">Cyberbullying Research Center, 2025</a>.
                </p>
            </section>

            <section className="home-links">
                <h2>Explore the Site</h2>
                <div className="home-links-grid">
                    {pages.map(({to, label, desc}) => (
                        <Link key={to} to={to} className="home-link-card"
                              onClick={() => window.scrollTo(0, 0)}
                        >
                            <h3>{label}</h3>
                            <p>{desc}</p>
                        </Link>
                    ))}
                </div>
            </section>

        </main>
      </>
  )
}
