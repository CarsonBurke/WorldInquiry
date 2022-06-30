import './navbar.css'
import { navLinks } from '../config'

function generateLinks() {

    const links = []

    for (const link of navLinks) {

        links.push(<a href={link}>{link}</a>)
    }

    return links
}

export function Navbar() {
    return (
        <nav className="navParent">
            <div className="navChild navLeft">

        <img src="../../public/logo.png" alt="" className="navIcon" />
        <a className="headerMid navTitle" href='/'>WorldInquiry</a>

            </div>
            <div className="navChild navRight">
                { generateLinks() }
            </div>
        </nav>
    )
}