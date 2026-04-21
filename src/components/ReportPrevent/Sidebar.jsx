import { useState } from 'react'

function Sidebar({onSelect}) { // is a sidebar function that will select the social media platforms to see page
    const[isOpen, setIsOpen] = useState(false) // drop down for social media tab
    return (
        <aside>
            <ul>
                <li>How to Report</li>
                <li>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        Social Media {isOpen ? "▲" : "▼"}
                    </button>
                    {isOpen && (
                        <ul>
                            <li onClick={() => onSelect("Discord")}>Discord</li>
                            <li onClick={() => onSelect("Instagram")}>Instagram</li>
                            <li onClick={() => onSelect("Snapchat")}>Snapchat</li>
                            <li onClick={() => onSelect("X")} >X (Formerly known as Twitter)</li>
                        </ul>
                    )}
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar 