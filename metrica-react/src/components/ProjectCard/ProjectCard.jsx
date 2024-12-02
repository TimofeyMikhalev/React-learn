import React from "react"
import project1 from  '../../assets/project1.jpg'


function ProjecCard(props) {
  return (
    <div>
      <div>{props.isNew && (<div>isNew</div>)} +</div>
      <img src={props.imag} alt={props.title} />
      <p>{props.title} — {props.square} м² — {props.year}</p>
      <a href={props.link}>Подробнее</a>
    </div>
)}
  

export default ProjecCard




