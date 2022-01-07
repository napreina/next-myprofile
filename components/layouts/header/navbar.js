import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="collapse navbar-collapse justify-content-center" id="main_nav">
            <ul id="top-menu" className="navbar-nav v-card-menu">
                <li className="nav-item">
                    <a className="nav-link smooth-menu" href="#home"> 
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link smooth-menu" href="#about"> 
                        About 
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link smooth-menu" href="#skill">
                        Employment History & Skill
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link smooth-menu" href="#work"> 
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link smooth-menu" href="#contact"> 
                        Contact 
                    </a>
                </li>
            </ul>
        </div> 
    )
}