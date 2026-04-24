// How to Report & Prevent — Eddie
// Step-by-step instructions on reporting cyberbullying on platforms like Instagram, Snapchat, etc., plus prevention tips
import {useState} from 'react'
import Sidebar from "../components/ReportPrevent/Sidebar"
import StepsList from '../components/ReportPrevent/StepsList'
import "../components/ReportPrevent/Sidebar.css"

// import rpp-images
import instagramLogo from '../assets/rpp-images/instagram-logo.png'
import snapchatLogo from '../assets/rpp-images/snapchat-logo.png'
import discordLogo from '../assets/rpp-images/discord-logo.png'
import xLogo from '../assets/rpp-images/x-logo.jpg'

// for meta tags
import { Helmet } from 'react-helmet'

export default function ReportPreventPage() {

  const[selected, setSelected] = useState(null)

  return (

    <>
      <Helmet>
        <title> How to Report and Prevent Cyberbullying | Prevent Cyberbullying</title>
        <meta name="description" content="Learn how to report cyberbullying on Social Media Platforms."/>
        <meta name="keywords" content="cyberbullying, report, prevent, instagram, snapchat"/>
        <meta name="author" content="Edwin Islas Aguirre"/>
      </Helmet>


    <div className="page-layout">
      <Sidebar onSelect={setSelected} selected={selected} />
    <main className="report-content">
      <h1>
        {selected === "Instagram" && <img src={instagramLogo} alt="Instagram" className="platform-logo"/>}
        {selected === "Snapchat" && <img src={snapchatLogo} alt="Snapchat" className="platform-logo"/>}
        {selected === "Discord" && <img src={discordLogo} alt="Discord" className="platform-logo"/>}
        {selected === "X" && <img src={xLogo} alt="X" className="platform-logo"/>}

        {selected === "prevent" ? "How to Prevent" : selected ? selected : "How to Report & Prevent"}
      </h1>
      {selected === "prevent" ? <p>Prevention tips coming soon</p> : <StepsList platform={selected}/>}
    </main>
    </div>
  </>
  )
}
