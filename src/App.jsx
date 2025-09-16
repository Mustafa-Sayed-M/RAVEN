import { Route, Routes } from "react-router-dom";
// Lenis:
import { ReactLenis } from 'lenis/react'
// Pages:
import HomePage from "@pages/HomePage";
import ProjectDetailPage from "@pages/ProjectDetailPage";
// Components:
import Footer from "@components/Layout/Footer";
import Navbar from "@components/Layout/Navbar";

function App() {
  return (
    <>
      <ReactLenis root options={{ duration: 2 }} />
      <div className="App min-h-screen bg-white text-purple-dark dark:bg-dark-bg dark:text-white transition-colors">
        {/* Navbar */}
        <Navbar />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectDetailPage />} />
          <Route path="/contact" element={<div className="contact-page h-screen">Contact Page</div>} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default App;