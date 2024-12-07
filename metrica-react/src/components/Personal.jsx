import React from "react";

function Person({ person }) {
    return (
        <div>
            <h2>BIO</h2>
            {person.map(item => {
                <>
                    <p>Name: {item.name}</p>
                    <p>Surname: {item.surname}</p>
                    <p>Age: {item.age}</p>
                    <p>Sex: {item.sex}</p>
                </>
            })}
          
        </div>
    )
}

export default Person;