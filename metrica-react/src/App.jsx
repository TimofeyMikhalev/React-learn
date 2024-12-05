 import HeroSection from "./components/HeroSection/HeroSection"
import AboutSection from "./components/AboutSection/AboutSection"
import ProjectSection from "./components/ProjectSection/ProjectSection"
import Button from "./components/Button/Button"
import React, { useState } from "react"
import Counter from "./Counter"
import Logs from './components/Logs'

const INITAL_COUNTER = 0
const COUNTER_STEP = 1
const MIN_COUNTER_VALUE = -5
const MAX_COUNTER_VALUE = 5

function App() {
  const [counter, setCounter] = useState(INITAL_COUNTER)
  const [logs, setLogs] = useState([])

  function handleMinusBtnClick() {
    const newCounter = counter - COUNTER_STEP

    setCounter(newCounter)
    setLogs([...logs, newCounter])
  }

  function handlePlusBtnClick() {
    const newCounter = counter + COUNTER_STEP

    setCounter(newCounter)
    setLogs([...logs, newCounter])
  } 

  function isMinusBtnDesable() {
    return counter <= MIN_COUNTER_VALUE
  }

  function isPlusBtnDesable() {
    return counter >= MAX_COUNTER_VALUE
  }

  function isCounterOutLinmit() {
    return counter <= MIN_COUNTER_VALUE || counter >= MAX_COUNTER_VALUE
  }



  return (
    <div className="container">

      <HeroSection />
      <AboutSection />
      <ProjectSection />

      <Counter isDanger={isCounterOutLinmit()} value={counter} />
      <Button text={'-'} isDidabled={isMinusBtnDesable()} onClick={handleMinusBtnClick}/>
      <Button text={'+'} isDidabled={isPlusBtnDesable()} onClick={handlePlusBtnClick}/>
      <Logs logs={logs} />
    </div>
  )
}

export default App
