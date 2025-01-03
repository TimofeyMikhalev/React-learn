import { useState } from 'react'
import Button from './Button'
import Modal from './Modal/Modal'

export default function EffectSection() {

    const [modal, setModal] = useState(false)

    function openModal() {
        setModal(true)
    }

    return (
        <section>
            <h3>Effects</h3>
            
            <Button onClick={openModal}>Открыть информацию</Button>
            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere porro at commodi, eius neque eos nisi quos libero aliquid. Illum autem laboriosam nostrum blanditiis minima quibusdam illo necessitatibus rem sunt?</p>
            </Modal>
        </section>
    )
}