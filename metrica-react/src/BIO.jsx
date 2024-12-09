import React, {useState} from "react";


function BIO() {
    const [person, setPerson] = useState({
        name: 'Tima',
        surname: 'Mikhalev',
        age: 0,
        sex: 'man',
        interests: ['']
    })

    const [form, setForm] = useState({
        name: '',
        surname: '',
        age: 0,
        sex: '',
        interests: ''
    })

    const [error, setError] = useState(false)


    function handleInputChange(e) {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value
        })
    }
    function handleBtnClick(key)  {
        let value = form[key]

        if(!value) {
            setError(true)
            return
        }

        setError(false)

       if(Array.isArray(person[key])) {
            value = [...person[key], form[key]]
        }

        setPerson({
            ...person,
            [key]: value
        }) 
    }

     
    return (
        <div>
            <label>
                Name: <input type="text" name="name" value={form.name} onChange={handleInputChange}/> 
                <button onClick={() => handleBtnClick('name')}>
                    Write Name
                </button>
            </label>
            <hr />
            <label>
                Surname: <input type="text" name="surname" value={form.surname} onChange={handleInputChange} />
                <button onClick={() => handleBtnClick('surname')}>
                    Write Surname
                </button>
            </label>

            <hr />
            <label>
                Age: <input value={form.age} name="age" type="number" onChange={handleInputChange} />
                <button onClick={() => handleBtnClick('age')}>
                    Write Age
                </button>
                
            </label>
            <hr />
            <label>
                <p>
                    Sex:
                    <label>
                        <input type="radio" name="sex" value="man" checked={form.sex === 'man'} onChange={handleInputChange}/>
                        Man
                    </label>
                    <label>
                        <input type="radio" name="sex" value="woman" checked={form.sex === 'woman'} onChange={handleInputChange} />
                        Woman
                    </label>
                </p>
                <button onClick={() => handleBtnClick('sex')}>
                    Write Sex
                </button>
            </label>
            <hr />
            <label>
                Interest: <input type="text" name="interests" value={form.interest} onChange={handleInputChange} />
                <button onClick={() => handleBtnClick('interests')}>
                    Write Interests
                </button>
            </label>
            <hr />

            <p>Name: {person.name}</p>
            <p>Surname: {person.surname}</p>
            <p>Age: {person.age}</p>

            <p>Sex: {person.sex}</p>
            <p>Interest:</p>
            
            <div>
                {person.interests.map(interest => (
                    <p key={interest}>{interest}</p>
                ))}
            </div>
        </div>
    )
}

export default BIO 