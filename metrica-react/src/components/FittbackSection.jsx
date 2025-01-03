import { useRef, useState } from "react";
import Button from "./Button";


function StateVsRef() {
    const input = useRef()
    // const [value, setValue] =  useState('')
    const [show, setShow] = useState(false)

    function handleKeyDown(event) {
        if(event.key === 'Enter') {
            setShow(true)
        }
    }

    return (
        <div>
            <h3>Input value: {show && input.current.value}</h3>
            <input 
                ref={input}
                type="text" 
                // value={value} 
                onKeyDown={handleKeyDown}
                // onChange={(e) => setValue( e.target.value )} 
                className="control" />
        </div>
    )
}

export default function FeedbackSection() {

    const [form, setForm] = useState({
        name: '',
        hasError: true,
        reason: 'help'
    })

    // const [name, setName] = useState('')
    // const [hasError, setHasError] = useState(true)
    // const [reason, setReason] = useState('help')


    function handleNameChange(event) {
        // setName(event.target.value)
        // setHasError(event.target.value.trim().length === 0)
        setForm((prev) => ({
            ...prev, 
            name: event.target.value,
            hasError: event.target.value.trim().length === 0
        }))

    }

    // function handleReasonChange(event) {
    //     setReason(event.target.value)
    // }

    // function toggleError() {
    //   setHasError((prev) => !prev)
    // }

    return (
        <section>
            <h3>Обратная связь</h3>

            {/* <Button onClick={toggleError}>Toggle Error</Button> */}

            <form>
                <label htmlFor="name">Ваше имя:</label>
                <input type="text" className="control" value={form.name} style={{ border: form.hasError ? '1px solid red':  null }} onChange={handleNameChange} />

                <label htmlFor="reason">Причина обращения: </label>
                <select id="reason" className="control" value={form.reason} onChange={(event) => setForm((prev) => ({...prev, reason: event.target.value}))}>
                    <option value='erroe'>Ошибка</option>
                    <option value='help'>Нужна помощь</option>
                    <option value='suggest'>Предложение</option>
                </select>

                <pre>
                    {JSON.stringify(form, null, 2)}
                </pre>

                <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>

            </form>

            <hr />

            <StateVsRef />
        </section>
    )
}