import React from "react"
import ProjecCard from "../ProjectCard/ProjectCard"
import Heading from "../Heading/Heading"
import Button from "../Button/Button"
import  project1Img from '../../assets/project1.jpg'
import  project2Img from '../../assets/project2.jpg'
import  project3Img from '../../assets/project3.jpg'

function ProjectSection() {

    return (
      <div>
        <Heading 
          level="h2"
          text="ПРОЕКТЫ"
        />
        <ProjecCard 
          title="ЖК ПРАВОБЕРЕЖНЫЙ"
          square={112}
          year="2023"
          link="/project1"
          imag={project1Img}
          isNew={true}
        />
        <ProjecCard 
          title="ЖК НОРВЕЖСКИЙ ПАРК"
          square={75}
          year="2023"
          link="/project2"
          imag={project2Img}
          isNew={false}
        />
        <ProjecCard 
          title="ЖК СОСНОВСКИЕ ОЗЕРА"
          square={94}
          year="2022"
          link="/project3"
          imag={project3Img}
          isNew={false}
        />
        <Button text="Смотреть все проекты" />
      </div>
    )
}
  

export default ProjectSection



