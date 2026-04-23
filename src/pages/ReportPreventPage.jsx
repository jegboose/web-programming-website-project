// How to Report & Prevent — Eddie
// Step-by-step instructions on reporting cyberbullying on platforms like Instagram, Snapchat, etc., plus prevention tips
import {useState} from 'react'
import PlatformButton from "../components/ReportPrevent/PlatformButton"
import Sidebar from "../components/ReportPrevent/Sidebar"
import StepsList from '../components/ReportPrevent/StepsList'
import "../components/ReportPrevent/Sidebar.css"

import { Helmet } from 'react-helmet'

export default function ReportPreventPage() {

  const[selected, setSelected] = useState(null)

  return (

    <>
      <Helmet>
        <title> How to Report and Prevent Cyberbullying | Prevent Cyberbullying</title>
        <meta name="description" content="Learn how to report cyberbullying on Social Media Platforms."/>
        <meta name="keywords" content="cyberbullying, report, prevent, instagram, snapchat"/>
        <meta name="authro" content="Edwin Islas Aguirre"/>
      </Helmet>


    <div style={{display : 'flex'}}>
      <Sidebar onSelect={setSelected} />
    <main className="report-content">
      <h1>{selected === "prevent" ? "How to Prevent" : selected ? selected : "How to Report & Prevent"}</h1>
      {selected === "prevent" ? <p>Prevention tips coming soon</p> : <StepsList platform={selected}/>}
    </main>
    </div>
  </>
  )
}
