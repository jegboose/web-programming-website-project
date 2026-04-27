// What is Cyberbullying? — Hayden
// Defines cyberbullying, explains types (harassment, impersonation, doxxing, etc.), and gives real-world examples

import "../styles/WhatIsCyberbullyingPage.css"
import Definition from "../components/whatiscyberbullying/Definition";
import EffectsOfCyberbullying from "../components/whatiscyberbullying/EffectsOfCyberbullying";
import TypeCards from "../components/whatiscyberbullying/TypeCards";
import WhereCyberbullyingOccurs from "../components/whatiscyberbullying/WhereCyberbullyingOccurs";
import VideoHolder from "../components/whatiscyberbullying/VideoHolder";
import SideNavBar from "../components/whatiscyberbullying/SideNavBar";
import Statistics from "../components/whatiscyberbullying/Statistics";
import Quiz from "../components/whatiscyberbullying/Quiz";
import StatsInfo from "../components/whatiscyberbullying/StatsInfo"
import { Helmet } from "react-helmet";

export default function WhatIsCyberbullyingPage() {
  return (
    <>
      <Helmet>
        <title> What is Cyberbullying? | Prevent Cyberbullying</title>
        <meta name="description" content="Learn what cyberbullying is, the different types, where it occurs, and its effects on victims."/>
        <meta name="keywords" content="what is cyberbullying, types of cyberbullying, cyberbullying effects, harassment, doxxing, cyberstalking"/>
        <meta name="author" content="GWDOAT"/>
      </Helmet>
    <div className="container">
      <SideNavBar />
      <main id="main-content">
        <h1>What is Cyberbullying?</h1>
        <Definition />
        <div className="video-section">
          
          <VideoHolder />
        </div>
        
        
      <h2>Types of Cyberbullying</h2>
      <div className="card-grid">
        <TypeCards 
          icon="src/assets/what-is-images/hoot-to-another-person.png"
          type="Harassment" 
          description="Sending repeated, unwanted messages to someone online." />
        <TypeCards 
          icon="src/assets/what-is-images/thats-what-the-mask-is.png"
          type="Impersonation" 
          description="Pretending to be someone else online to cause harm or spread misinformation." />
        <TypeCards
          icon="src/assets/what-is-images/dox.png"
          type="Doxxing" 
          description="Publishing private or identifying information about someone without their consent." />
          <TypeCards 
          icon="src/assets/what-is-images/stalking.png"
          type="Cyberstalking" 
          description="Using the internet to stalk or harass someone." />
          <TypeCards 
          icon="src/assets/what-is-images/exclude.png"
          type="Exclusion" 
          description="Intentionally excluding someone from online groups or activities." />
          <TypeCards 
          icon="src/assets/what-is-images/trolling.png"
          type="Trolling" 
          description="Posting inflammatory or off-topic messages to provoke others." />
        </div>
        <Quiz />
        <div className = "lists-wrapper">
          <WhereCyberbullyingOccurs/>
          <EffectsOfCyberbullying />
        </div>
        <StatsInfo />
        <Statistics />
      </main>
    </div>
    </>
  )
}
