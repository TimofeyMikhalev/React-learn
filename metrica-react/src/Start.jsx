import Header from "./components/Header"
import WayToTeach from "./components/WayToTeach"
import Button  from "./components/Button"

import { ways } from '../data'


export default function Start() {
    let content = 'Нажми на кнопку'
    
    console.log('App Component Render')
    
    function handleClick(type) {
        console.log('button click', type)
        content = type
    }

    return (
        <div>
            <Header />
            <main>
                <section>
                    <h3>Нащ подход: </h3>

                    <ul>
                        <WayToTeach title={ways[0].title} description={ways[0].description} />
                        <WayToTeach { ...ways[1] } />
                        <WayToTeach { ...ways[2] } />
                    </ul>
                </section>
                <section>
                    <h3>Сколько зарабатывают frontend-разработчики?</h3>
                    <Button buttonClick={() => handleClick('way')}>Подход</Button>
                    <Button buttonClick={() => handleClick('eazy')}>Доступность</Button>
                    <Button buttonClick={() => handleClick('program')}>Концентрация</Button>

                    <p>{content}</p>
                </section>
            </main>
         
        </div>
    )
}

