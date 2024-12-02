import React from "react"
import HeroSection from "./components/HeroSection/HeroSection"
import AboutSection from "./components/AboutSection/AboutSection"
import ProjectSection from "./components/ProjectSection/ProjectSection"
import Button from "./components/Button/Button"


function App() {

  function handleButtonClick() {
    alert("кнопка нажата")
  }

  return (
    <div className="container">
      <HeroSection />
      <AboutSection />
      <ProjectSection />

      <Button onClick={handleButtonClick} text={'Нажми меня'}/>
    </div>
  )
}

export default App
