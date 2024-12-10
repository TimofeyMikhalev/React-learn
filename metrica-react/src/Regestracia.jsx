import React, {useState} from "react";


function Regestration() {
    const [reg, setReges] = useState('')

    function handleName(e) {
        console.log(e.target.value)
    }
    function handleSurname(e) {
        console.log(e.target.value)
    }
    function handlePhone(e) {
        console.log(e.target.value)
    }

    function displayCheck() {

    }

    return (
        <>
            <h2>Создание аккаунта</h2>
            <p>Введите свои данные, чтобы создать аккаунт в сервисе</p>

            <form>
                <input type="text" name="name" id="name" placeholder="Имя" onChange={handleName} />
                <br />
                <input type="text" name="surname" id="surname" placeholder="Фамилия" onChange={handleSurname} />
                <br />
                <input type="tel" name="tel" id="tel" placeholder="Номер телефона" onChange={handlePhone} />
                <br />
                <input type="email" name="email" id="email" placeholder="E-mail" />
                <br />
                <input type="password" name="password" id="password" placeholder="Пароль" />
                <br />
                <input type="password" name="rippasport" id="rippasport" placeholder="Повторный пароль" />
                <br />
                <input type="checkbox" name="myCheckbox" defaultChecked={false} />Подтверждаю пароль
                <br />
                <button type="submit" onClick={displayCheck}>Продолжить</button>
            </form>
        </>
    )
}

export default Regestration;