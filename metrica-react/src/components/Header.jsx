import logo from '../../public/vite.svg'

export default function Header() {
    const now = new Date()

    return  (
        <header>
            <img src={logo} alt='' />
            {/* <h3>University</h3> */}

            <span>Time: { now.toLocaleTimeString() }</span>
        </header>
    )
}
