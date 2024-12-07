import React, {useState} from "react";
import Person from "./components/personal";


const NAME = 'Tima'
const SURNAME = 'Mikhal'
const AGE = 25
const SEX = 'man'



function BIO() {

    const [age, setAge] = useState('');
    const ageAsNumber = Number(age);

    const [person, setState] = useState({
        name: NAME,
        surname: SURNAME,
        age: ageAsNumber,
        sex: SEX,
        interests: ['youtube', 'basketbal']
    })

    return (
        <div>
            <label>
                Name: <input name="myName" /> 
                <button>
                    Write Name
                </button>
            </label>
            <hr />
            <label>
                Surname: <input name="mySurname" />
                <button>
                    Write Surname
                </button>
            </label>

            <hr />
            <label>
                Age: <input name="myAge" type="number" onChange={e => setAge(e.target.value)}/>
                <button onClick={() => setAge(ageAsNumber)}>
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