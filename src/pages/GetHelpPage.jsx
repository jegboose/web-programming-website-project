import { useState } from "react"
import "./GetHelpPage.css"
import CrisisApproach from "../components/get-help/CrisisApproach"
import CrisisHotline from "../components/get-help/CrisisHotline"
import CrisisParents from "../components/get-help/CrisisParents"
import ReportingTools from "../components/get-help/ReportingTools"
import GetHelpSidebar from "../components/get-help/GetHelpSidebar"
import { Helmet } from 'react-helmet'

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
    <>
    <Helmet>
      <title>Get Help &amp; Resources | Prevent Cyberbullying</title>
      <meta name="description" content="Find crisis hotlines, step-by-step advice for victims, parental guidance, and reporting tools to help stop cyberbullying." />
      <meta name="keywords" content="cyberbullying help, crisis hotline, report cyberbullying, cyberbullying victims, advice for parents, stop cyberbullying" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Brandon Ngeth" />
      <meta property="og:title" content="Get Help &amp; Resources | Prevent Cyberbullying" />
      <meta property="og:description" content="Find crisis hotlines, step-by-step advice for victims, parental guidance, and reporting tools to help stop cyberbullying." />
      <meta property="og:type" content="website" />
    </Helmet>
    {/* Flex layout: sidebar on the left, content on the right */}
    <main className="get-help-layout">

      {/* Sidebar component — handles all navigation button rendering */}
      <GetHelpSidebar sections={sections} active={active} setActive={setActive} />

      {/* Content area — only the active section's component renders here */}
      <div className="get-help-content">
        {current.component}
      </div>

    </main>
    </>
  )
}
