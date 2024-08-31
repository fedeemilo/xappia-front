import React from 'react'
import { getNavItems } from '../utils/getNavItems'

const NAV_ITEMS = getNavItems()

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light   fixed-top">
            <div className="container">
                <ul className="navbar-nav mx-auto">
                    {NAV_ITEMS.map(({ id, icon, classes, to }) => (
                        <li key={id} className="nav-item">
                            <a className={`${classes} nav-link`} href={to}>
                                {icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
