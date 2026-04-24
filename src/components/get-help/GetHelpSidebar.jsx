import "./GetHelpSidebar.css"

// Sidebar navigation for the Get Help page
// Receives sections, active key, and setActive from GetHelpPage
export default function GetHelpSidebar({ sections, active, setActive }) {
  return (
    <nav className="sidebar-nav">
      {/* Title above the sidebar so users know what it's for */}
      <h3>Resources</h3>
      <ul>
        {sections.map(s => (
          <li key={s.key}>
            <button
              onClick={() => setActive(s.key)} // sets the clicked section as active
              className={`sidebar-btn ${active === s.key ? "active" : ""}`}
              aria-current={active === s.key ? "page" : undefined}
            >
              {s.label}
            </button>
            {/* Short description under each button to help users know what to expect */}
            <p className="sidebar-desc">{s.desc}</p>
          </li>
        ))}
      </ul>
    </nav>
  )
}
