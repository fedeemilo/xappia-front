import React from "react";
import { ICONS } from "../constants/icons";

const NavBar = () => {
    return (
        <nav className="p-2 bg-light w-75 mx-auto border rounded">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <img
                            src={ICONS.XAPPIA_LOGO}
                            alt="xappia"
                            style={{ width: "6rem" }}
                        />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
