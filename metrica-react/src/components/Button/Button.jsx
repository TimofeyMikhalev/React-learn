import React from "react";

function Button({ text, onClick }) {
    return (
        <>
            <button onClick={onClick}>Посмотреть услуги</button>

            <button>{text}</button>
        </>

    )
}

export default Button;