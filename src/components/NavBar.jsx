import React from "react";
import { ICONS } from "../constants/icons";
import { AiOutlineHome } from "react-icons/ai";

const NAV_ITEMS = [
    {
        id: 1,
        icon: (
            <img
                src={ICONS.XAPPIA_LOGO}
                alt="xappia"
                style={{ width: "6rem" }}
            />
        ),
        classes: "nav-link",
        to: "/"
    },
    {
        id: 2,
        icon: <AiOutlineHome />,
        classes: "nav-link text-secondary h3",
        to: "/"
    }
];

const NavBar = () => {
    return (
        <nav className="p-2 bg-light w-75 mx-auto rounded">
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
