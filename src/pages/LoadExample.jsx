import React from "react";
import Table from "../components/Table";
import { useParams } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

const LoadExample = () => {
    const { brand } = useParams();

    return (
        <div className="container mt-5">
            <a href={`/excel/${brand}`} className="text-secondary">
                <TiArrowBack style={{ fontSize: "2.4rem" }} />
                Volver
            </a>
            <div className="d-flex justify-content-center">
                <h4 className="text-center mb-4">
                    Ejemplo formato archivo excel (API {brand})
                </h4>
            </div>
            <Table />
        </div>
    );
};

export default LoadExample;
