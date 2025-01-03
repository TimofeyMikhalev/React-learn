import WayToTeach from "./WayToTeach"
import { ways } from '../../data'

export default function TeaachingSection() {
    return (
        <section>
            <h3>Наш подход: </h3>

            <ul>
                { ways.map((way) => (
                    <WayToTeach key={way.title} {...way} />
                ))}
            </ul>
        </section>
    )
}