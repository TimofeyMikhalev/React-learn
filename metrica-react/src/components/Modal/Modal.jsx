import { createPortal } from "react-dom"

export default function Modal({ children, open }) {
    return (
        <dialog open={open}>{children}</dialog>
    )
}
