import React from "react";
import './Heading.css'

function Heading(props) {
    console.log(props)
    return (
        <h1 className="heading-h1">{props.text}</h1>
    )
}

export default Heading