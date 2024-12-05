import React from "react";
import './Counter.css'

function Counter({ value, isDanger, index }) {
    const classnames = isDanger ? 'counter_danger' : ''
 
    return (
        <p className={classnames}>
            {value}
        </p>
    )
}

export default Counter;