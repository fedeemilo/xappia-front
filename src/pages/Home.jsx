import React from "react";
import Card from "../components/Card";
import { SiToyota, SiVolkswagen } from "react-icons/si";

const BRAND_CARDS = [
    {
        id: 1,
        text: "Toyota",
        icon: <SiToyota style={{ fontSize: "2rem" }} />,
        path: "/excel/toyota",
        disabled: false,
        dealers: ["KAI", "TTC"]
    },
    {
        id: 2,
        text: "Volkswagen",
        message: "Aún no disponible",
        icon: <SiVolkswagen style={{ fontSize: "1.6rem" }} />,
        path: "excel/volkswagen",
        disabled: false
    }
];

const Home = () => {
    return (
        <div className="container">
            <div className="row mt-4">
                {BRAND_CARDS.map(
                    ({ id, icon, text, path, disabled, message, dealers }) => (
                        <div key={id} className="col-sm-12 col-md-6 my-2">
                            <Card
                                icon={icon}
                                text={text}
                                path={path}
                                disabled={disabled}
                                message={message}
                                dealers={dealers}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Home;
