import React from "react";

function Logs({ logs }) {

    return (
        <>
            <p>
                <h2>Логи:</h2>
                {logs.map(log => (
                    <div key={log.id}>
                        <p>Действие: {log.action}</p>
                        <p>Предыдущие значение: {log.prevValue}</p>
                        <p>Текущее значение: {log.value}</p>
                    </div>
                ))}
            </p>
        </>

    )
}

export default Logs;