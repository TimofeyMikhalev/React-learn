import React from "react"
import ProjecCard from "../ProjectCard/ProjectCard"
import Heading from "../Heading/Heading"
import Button from "../Button/Button"
import  project1Img from '../../assets/project1.jpg'
import  project2Img from '../../assets/project2.jpg'
import  project3Img from '../../assets/project3.jpg'


const project = [
  {
    title: "ЖК ПРАВОБЕРЕЖНЫЙ",
    square: 112,
    year: 2023,
    link: "/project1",
    imag: project1Img,
    isNew: true
  },
  {
    title: "ЖК НОРВЕЖСКИЙ ПАРК",
    square: 75,
    year: 2023,
    link: "/project2",
    imag: project2Img,
    isNew: false
  },
  {
    title: "ЖК СОСНОВСКИЕ ОЗЕРА",
    square: 112,
    year: 2023,
    link: "/project3",
    imag: project3Img,
    isNew: false
  }
]


function ProjectSection() {

    return (
      <div>
        <Heading 
          level="h2"
          text="ПРОЕКТЫ"
        />

        { project.map(project => {
          return (
            <ProjecCard 
            title={project.title}
            square={project.square}
            year={project.year}
            link={project.link}
            imag={project.imag}
            isNew={project.isNew}
          />
          )
        }) }

        <Button text="Смотреть все проекты" />
      </div>
    )
}
  

export default ProjectSection



