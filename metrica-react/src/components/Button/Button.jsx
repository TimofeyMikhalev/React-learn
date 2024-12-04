import React from "react";

function Button({ text, onClick, isDidabled }) {
    return (
        <>
            {/* <button onClick={onClick}></button> */}

            <button disabled={isDidabled} onClick={onClick}>{text}</button>
        </>

    )
}

export default Button;