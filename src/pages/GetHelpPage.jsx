import { useState } from "react"
import CrisisApproach from "../components/get-help/CrisisApproach"
import CrisisHotline from "../components/get-help/CrisisHotline"
import CrisisParents from "../components/get-help/CrisisParents"
import ReportingTools from "../components/get-help/ReportingTools"
import GetHelpSidebar from "../components/get-help/GetHelpSidebar"

// Each section maps a sidebar label, description, and component together
const sections = [
  { key: "hotline",   label: "Crisis Hotlines",      desc: "Call or text for immediate help",          component: <CrisisHotline /> },
  { key: "approach",  label: "Are You a Victim?",    desc: "First steps if you're being cyberbullied", component: <CrisisApproach /> },
  { key: "parents",   label: "Advice for Parents",   desc: "How to support your child",                component: <CrisisParents /> },
  { key: "reporting", label: "Report Cyberbullying", desc: "Tools to report incidents anonymously",    component: <ReportingTools /> },
]

export default function GetHelpPage() {
  // "active" tracks which sidebar item is currently selected; defaults to the first section
  const [active, setActive] = useState("hotline")

  // Find the section object that matches the active key so we can render its component
  const current = sections.find(s => s.key === active)

  return (
    // Flex layout: sidebar on the left, content on the right
    <main style={{ display: "flex", gap: "2rem", padding: "2rem" }}>

      {/* Sidebar component — handles all navigation button rendering */}
      <GetHelpSidebar sections={sections} active={active} setActive={setActive} />

      {/* Content area — only the active section's component renders here */}
      <div style={{ flex: 1 }}>
        {current.component}
      </div>

    </main>
  )
}
