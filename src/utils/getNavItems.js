import { ICONS } from "../constants/icons";
import { AiOutlineHome } from "react-icons/ai";

export const getNavItems = () => [
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
