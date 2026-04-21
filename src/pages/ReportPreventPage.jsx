// How to Report & Prevent — Eddie
// Step-by-step instructions on reporting cyberbullying on platforms like Instagram, Snapchat, etc., plus prevention tips
import {useState} from 'react'
import PlatformButton from "../components/ReportPrevent/PlatformButton"
import Sidebar from "../components/ReportPrevent/Sidebar"


export default function ReportPreventPage() {

  const[selected, setSelected] = useState(null)

  return (
    <div style={{display : 'flex'}}>
      <Sidebar onSelect={setSelected} />
    <main>
      <h1>How to Report & Prevent</h1>
      <p>TESTING: You selected: {selected}</p>  
    </main>
    </div>
  )
}
