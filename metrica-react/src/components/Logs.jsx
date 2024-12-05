import React from "react";

function Logs({ logs }) {

    console.log(logs)
    return (
        <>
            <p>
                <h2>Логи:</h2>
                {logs.map(log => (
                    <p>{log}</p>
                ))}
            </p>
        </>

    )
}

export default Logs;