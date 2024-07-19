import '../styles/navbar.css';
export default function Navbar() {
    return (
        <nav
            id="navbar"
            className='navbar'
        >
            <div className="nav__name">Ranga Raja</div>
            <ul>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="https://drive.google.com/uc?export=download&id=1eDTOVCJE-xdK7sfFix7hwio_lvdwum27">Resume</a>
                </li>
            </ul>
        </nav>
    )
}
