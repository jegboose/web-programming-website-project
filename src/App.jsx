import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import WhatIsCyberbullyingPage from './pages/WhatIsCyberbullyingPage'
import GetHelpPage from './pages/GetHelpPage'
import ReportPreventPage from './pages/ReportPreventPage'
import StoriesPage from './pages/StoriesPage'
import './styles/App.css'
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/what-is-cyberbullying" element={<WhatIsCyberbullyingPage />} />
        <Route path="/get-help" element={<GetHelpPage />} />
        <Route path="/report-prevent" element={<ReportPreventPage />} />
        <Route path="/stories" element={<StoriesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
