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
                        className={active === "main-content" ? "side-nav-btn active" : "side-nav-btn"}
                        onClick={() => handleClick("main-content")}
                    >
                        Definition
                    </button>
                </li>
                
                <li>
                    <button
                        className={active === "video-header" ? "side-nav-btn active" : "side-nav-btn"}
                        onClick={() => handleClick("video-header")}
                    >
                        Watch a Video
                    </button>
                </li>

                <li>
                    <button
                        className={active === "types-header" ? "side-nav-btn active" : "side-nav-btn"}
                        onClick={() => handleClick("types-header")}
                    >
                        Types of Cyberbullying
                    </button>
                </li>

                <li>
                    <button
                        className={active === "quiz-header" ? "side-nav-btn active" : "side-nav-btn"}
                        onClick={() => handleClick("quiz-header")}
                    >
                        Take the Quiz
                    </button>
                </li>

                <li>
                    <button
                        className={active === "where-header" ? "side-nav-btn active" : "side-nav-btn"}
                        onClick={() => handleClick("where-header")}
                    >
                        Where & How
                    </button>
                </li>

                <li>
                    <button
                        className={active === "statistics-info" ? "side-nav-btn active" : "side-nav-btn"}
                        onClick={() => handleClick("statistics-info")}
                    >
                        Statistics
                    </button>
                </li>
            </ul>
        </nav>
    );
}