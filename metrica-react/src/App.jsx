 import HeroSection from "./components/HeroSection/HeroSection"
import AboutSection from "./components/AboutSection/AboutSection"
import ProjectSection from "./components/ProjectSection/ProjectSection"
import Button from "./components/Button/Button"
import React, { useState } from "react"
import Counter from "./Counter"

function App() {

  const [counter, setCounter] = useState(0)

  function handleMinusBtnClick() {
    setCounter(counter - 1)
  }
  function handlePlusBtnClick() {
    setCounter(counter + 1)
  } 

  function isMinusBtnDesable() {
    return counter === -5
  }

  function isPlusBtnDesable() {
    return counter === 5
  }

  // function handleMinusBtnClick() {
  //   setCounter((prevCounter) => {
  //     return prevCounter - 1
  //   })
  // }

  // function handlePlusBtnClick() {
  //   setCounter((prevCounter) => {
  //     return prevCounter + 1
  //   })
  // } 

  return (
    <div className="container">
      <Counter value={counter}/>
      <HeroSection />
      <AboutSection />
      <ProjectSection />

      <p>{counter}</p>
      <Button text={'-'} isDidabled={isMinusBtnDesable()} onClick={handleMinusBtnClick}/>
      <Button text={'+'} isDidabled={isPlusBtnDesable()} onClick={handlePlusBtnClick}/>
    </div>
  )
}

export default App
