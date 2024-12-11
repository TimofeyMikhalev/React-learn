import React, {useState} from "react";


function Regestration() {
    const [reg, setReges] = useState({
        name: '',
        surname: '',
        tel: '',
        email: '',
        password: '',
        rippasport: ''
    })

    function handleGlobal(e) {
        const { name, value } = e.target

        setReges({
            ...reg,
            [name]: value
        })

    }
    
    function displayCheck(e) {
        e.preventDefault()

        for (let key in reg) {
            if(reg[key].length < 1) {
                return(alert('Не все поля заполнены'))
            } 
            `${key}: ${reg[key]}`
        }

        if(reg.rippasport === reg.password) {
            console.log('Пароль сохранен')
        } else {
            console.log('Пароль не совпадает')
        }
        alert('Круто! Все заполнено')
        alert(`Name: ${reg.name}, Surname: ${reg.surname}, Phone: ${reg.tel}, E-mail: ${reg.password}`);
    }

    return (
        <>
            <h2>Создание аккаунта</h2>
            <p>Введите свои данные, чтобы создать аккаунт в сервисе</p>

            <form>
                <input type="text" name="name" id="name" placeholder="Имя" onChange={handleGlobal} />
                <br />
                <input type="text" name="surname" id="surname" placeholder="Фамилия" onChange={handleGlobal} />
                <br />
                <input type="number" name="tel" id="tel" placeholder="Номер телефона" onChange={handleGlobal} />
                <br />
                <input type="email" name="email" id="email" placeholder="E-mail" onChange={handleGlobal}/>
                <br />
                <input type="password" name="password" id="password" placeholder="Пароль" onChange={handleGlobal}/>
                <br />
                <input type="password" name="rippasport" id="rippasport" placeholder="Повторный пароль" onChange={handleGlobal}/>
                <br />
                <input type="checkbox" name="myCheckbox" onChange={handleGlobal}/>Подтверждаю пароль
                <br />

                <button type="submit" onClick={displayCheck}>Продолжить</button>
            </form>
        </>
    )
}

export default Regestration;