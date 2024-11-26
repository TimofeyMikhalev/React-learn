import React from "react"
import project1 from  '../../assets/project1.jpg'

function ProjecCard() {
    return (
      <div>
        <div>NEW</div>
        <img src={project1} alt="" />
        <p>ЖК ПРАВОБЕРЕЖНЫЙ — 112 м² — 2023</p>
        <a href="">Подробнее</a>
      </div>
    )
}
  

export default ProjecCard