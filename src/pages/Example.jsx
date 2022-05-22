import React from "react";
import Table from "../components/Table";
import { useParams } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { capitalizeFirstLetter } from "../utils/capitalize";

const Example = () => {
    const { brand } = useParams();

    return (
        <div className="container mt-5">
            <a href={`/excel/${brand}`} className="text-secondary">
                <TiArrowBack style={{ fontSize: "2.4rem" }} />
                Volver
            </a>
            <div className="d-flex justify-content-center">
                <h4 className="text-center mb-4 font-italic">
                    Ejemplo formato archivo excel (API{" "}
                    {capitalizeFirstLetter(brand)})
                </h4>
            </div>
            <Table brand={brand} />
        </div>
    );
};

export default Example;
