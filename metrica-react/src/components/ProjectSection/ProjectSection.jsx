import React from "react"
import ProjecCard from "../ProjectCard/ProjectCard"
import Heading from "../Heading/Heading"
import Button from "../Button/Button"

function ProjectSection() {
    return (
      <div>
        <Heading 
          level="h2"
          text="ПРОЕКТЫ"
        />
        <ProjecCard />
        <ProjecCard />
        <ProjecCard />
        <Button text="Смотреть все проекты" />
      </div>
    )
}
  

export default ProjectSection