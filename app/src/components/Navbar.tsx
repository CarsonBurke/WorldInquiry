import './navbar.css'
import { navLinks } from '../config'
import logo from '../images/logo.png'
import { navManager } from '../navManager'

function generateLinks() {

    const links = []

    for (const opts of navLinks) {

        links.push(<a href={opts.href || opts.text} className={opts.type + 'NavTopLink'}>{opts.text}</a>)
    }

    return links
}

export function Navbar() {
    return (
        <nav className="navParent navParentTop animate floatDown" onScroll={navManager}>
            <div className="navChild navLeft">

                <a className="navTopper" href='/'>

                <img src={logo} alt="" className="navIcon" />
                <h2 className="headerMid">WorldInquiry</h2>

                </a>

            </div>
            <div className="navChild navRight">

                { generateLinks() }

            </div>
        </nav>
    )
}
