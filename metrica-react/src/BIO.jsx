import React, {useState} from "react";
import Person from "./components/personal";




function BIO() {

    const [person, setPerson] = useState({
        name: '',
        surname: '',
        age: 0,
        sex: '',
        interests: ['youtube', 'basketbal']
    })

    const [form, setForm] = useState({
        name: '',
        surname: '',
        age: 0
    })

    const handleNameInputChange = (e) => {
        setForm({
            ...form,
            name: e.target.value
        })
    }
    function handleSetNameBtnClick() {
        if(!form.name) {
            return
        }

        setPerson({
            ...person,
           name: form.name  
        })
    }

    function handleSurnameInputChange(e) {
        setForm({
            ...form,
            surname: e.target.value
        })
    }
    function handleSetSurnameBtnClick() {
        if(!form.surname) {
            return
        }

        setPerson({
            ...person,
            surname: form.surname
        })
    }


    function handleAgeInputChange(e) {
        setForm({
            ...form,
            age: e.target.value
        })
    }
    function handleAgeBtnClick() {
        if(!form.age) {
            return
        }

        setPerson({
            ...person,
            age: parseInt(form.age)
        })
    }
    

    return (
        <div>
            <label>
                Name: <input type="text" name="myName" value={form.name} onChange={handleNameInputChange}/> 
                <button onClick={handleSetNameBtnClick}>
                    Write Name
                </button>
            </label>
            <hr />
            <label>
                Surname: <input type="text" name="mySurname" value={form.surname} onChange={handleSurnameInputChange} />
                <button onClick={handleSetSurnameBtnClick}>
                    Write Surname
                </button>
            </label>

            <hr />
            <label>
                Age: <input value={form.age} name="age" type="number" onChange={handleAgeInputChange}/>
                <button onClick={handleAgeBtnClick}>
                    Write Age
                </button>
                
            </label>
       
            <hr />
            <label>
                Sex: <input name="mySex" />
                <button>
                    Write Sex
                </button>
            </label>
            <hr />
            <label>
                Interests: <input name="myHobby" />
                <button>
                    Write Hobby
                </button>
            </label>
            <hr />

            <p>Name: {person.name}</p>
            <p>Surname: {person.surname}</p>
            <p>Age: {person.age}</p>
            <p>Sex: {person.sex}</p>
            <p>Hobby:</p>
            <div>{person.interests.map(item => (
                <p key={item}>{item}</p>
            ))}</div>
        </div>
    )
}

export default BIO 