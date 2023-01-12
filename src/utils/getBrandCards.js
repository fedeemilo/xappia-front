import { SiToyota, SiVolkswagen, SiChevrolet } from "react-icons/si";
import { ImBooks } from "react-icons/im";

export const getBrandCards = () => [
    {
        id: 1,
        text: "Toyota",
        icon: <SiToyota style={{ fontSize: "2rem" }} />,
        path: "/excel/toyota",
        dealers: [
            { id: "KAI", disabled: false },
            { id: "TTC", disabled: false },
            { id: "ASI", disabled: false },
            { id: "TRI", disabled: false },
            { id: "YAC", disabled: false }
        ]
    },
    {
        id: 2,
        text: "Volkswagen",
        icon: <SiVolkswagen style={{ fontSize: "1.6rem" }} />,
        path: "/excel/volkswagen",
        disabled: false
    },
    {
        id: 3,
        text: "Chevrolet",
        icon: <SiChevrolet style={{ fontSize: "3rem" }} />,
        path: "/excel/chevrolet",
        disabled: false
    },
    {
        id: 4,
        text: "EAN",
        icon: <ImBooks style={{ fontSize: "2.8rem" }} />,
        path: "/excel/ean",
        disabled: false
    }
];
