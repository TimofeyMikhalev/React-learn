import Button from "./Button"
import { useState } from "react"
import { differences } from "../../data"


export default function DifferencisSection() {
    //хуки должны быть только внутри компонента и наверху
    const [contentType, setContentType] = useState(null)


    function handleClick(type) {
        setContentType(type)
    }

    return (
        <section>
            <h3>Сколько зарабатывают frontend-разработчики?</h3>
            <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>Подход</Button>
            <Button isActive={contentType === 'eazy'} onClick={() => handleClick('eazy')}>Доступность</Button>
            <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Концентрация</Button>

            {/* { contentType ?  (
                <p>{differences[contentType]}</p>
            ) : (
                <p>Нажми на кнопку</p>
            )} */}
            
            {/* { !contentType ? <p>Нажми на кнопку</p> : null}
            { contentType ? <p>{differences[contentType]}</p> : null} */}
            
            { !contentType && <p>Нажми на кнопку</p> }
            { contentType && <p>{differences[contentType]}</p>}

            {/* {tabContent} */}

        </section>
    )
}