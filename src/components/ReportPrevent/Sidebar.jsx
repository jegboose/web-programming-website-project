import { useState } from 'react'
import './Sidebar.css'

function Sidebar({onSelect, selected}) { // is a sidebar function that will select the social media platforms to see page
    const[isOpen, setIsOpen] = useState(false) // drop down for social media tab
    return (
        <aside className="sidebar">
            
                <div className="sidebar-title">How to Report</div>
                <div className="sidebar-item">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        Social Media {isOpen ? "▲" : "▼"}
                    </button>
                    {isOpen && (
                        <div className="sidebar-dropdown">
                            <div onClick={() => onSelect("Discord")} className={selected === "Discord" ? "sidebar-link active" : "sidebar-link"}>Discord</div>
                            <div onClick={() => onSelect("Instagram")} className={selected === "Instagram" ? "sidebar-link active" : "sidebar-link"}>Instagram</div>
                            <div onClick={() => onSelect("Snapchat")} className={selected === "Snapchat" ? "sidebar-link active" : "sidebar-link"}>Snapchat</div>
                            <div onClick={() => onSelect("X")} className={selected === "X" ? "sidebar-link active" : "sidebar-link"}>X (Twitter)</div>
                        </div>
                    )}
            </div>
        </aside>
    )
}
export default Sidebar 