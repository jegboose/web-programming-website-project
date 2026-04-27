import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import WhatIsCyberbullyingPage from './pages/WhatIsCyberbullyingPage'
import GetHelpPage from './pages/GetHelpPage'
import ReportPreventPage from './pages/ReportPreventPage'
import StoriesPage from './pages/StoriesPage'
import './styles/App.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AccessibilityPage from './pages/AccessibilityPage.jsx'

function App() {
  return (
    <HashRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/what-is-cyberbullying" element={<WhatIsCyberbullyingPage />} />
        <Route path="/get-help" element={<GetHelpPage />} />
        <Route path="/report-prevent" element={<ReportPreventPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
      </Routes>
        <Footer />
    </HashRouter>
  )
}

export default App
