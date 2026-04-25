import { useState } from "react";
import "./SideNavBar.css";

export default function SideNav() {
    const [active, setActive] = useState("definition");

    const handleClick = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        setActive(id);
    };

    return (
        <nav className="side-nav" aria-label="Page sections">
            <p className="side-nav-heading">Index</p>
            <ul className="side-nav-list">

                <li>
                    <button
                        className={active === "definition" ? "side-nav-btn active" : "side-nav-btn"}
                        onClick={() => handleClick("definition")}
                    >
                        Definition
                    </button>
                </li>
                
                <li>
                    <button
                        className={active === "video" ? "side-nav-btn active" : "side-nav-btn"}
                        onClick={() => handleClick("video")}
                    >
                        Watch a Video
                    </button>
                </li>

                <li>
                    <button
                        className={active === "types" ? "side-nav-btn active" : "side-nav-btn"}
                        onClick={() => handleClick("types")}
                    >
                        Types of Cyberbullying
                    </button>
                </li>

                <li>
                    <button
                        className={active === "where" ? "side-nav-btn active" : "side-nav-btn"}
                        onClick={() => handleClick("where")}
                    >
                        Where it Occurs
                    </button>
                </li>

                <li>
                    <button
                        className={active === "effects" ? "side-nav-btn active" : "side-nav-btn"}
                        onClick={() => handleClick("effects")}
                    >
                        Effects
                    </button>
                </li>

                <li>
                    <button
                        className={active === "statistics" ? "side-nav-btn active" : "side-nav-btn"}
                        onClick={() => handleClick("statistics")}
                    >
                        Statistics
                    </button>
                </li>
            </ul>
        </nav>
    );
}