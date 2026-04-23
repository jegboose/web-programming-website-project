// How to Report & Prevent — Eddie
// Step-by-step instructions on reporting cyberbullying on platforms like Instagram, Snapchat, etc., plus prevention tips
import {useState} from 'react'
import PlatformButton from "../components/ReportPrevent/PlatformButton"
import Sidebar from "../components/ReportPrevent/Sidebar"
import StepsList from '../components/ReportPrevent/StepsList'
import "../components/ReportPrevent/Sidebar.css"


export default function ReportPreventPage() {

  const[selected, setSelected] = useState(null)

  return (
    <div style={{display : 'flex'}}>
      <Sidebar onSelect={setSelected} />
    <main className="report-content">
      <h1>{selected === "prevent" ? "How to Prevent" : selected ? selected : "How to Report & Prevent"}</h1>
      {selected === "prevent" ? <p>Prevention tips coming soon</p> : <StepsList platform={selected}/>}
    </main>
    </div>
  )
}
