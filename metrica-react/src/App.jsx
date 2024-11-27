import React from "react"
import HeroSection from "./components/HeroSection/HeroSection"
import AboutSection from "./components/AboutSection/AboutSection"
import ProjectSection from "./components/ProjectSection/ProjectSection"



function App() {
  return (
    <div className="container">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </div>
  )
}

export default App
