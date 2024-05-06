import React from "react";
import { getNavItems } from "../utils/getNavItems";

const NAV_ITEMS = getNavItems();

const NavBar = () => {
    return (
        <nav className="p-2 bg-white w-100 mx-auto rounded mt-n5">
            <ul className="nav justify-content-center">
                {NAV_ITEMS.map(({ id, icon, classes, to }) => (
                    <li key={id} className="nav-item">
                        <a className={classes} href={to}>
                            {icon}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
