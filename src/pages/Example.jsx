import React from "react";
import Table from "../components/Table";
import { useParams, useLocation } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

const Example = () => {
    const { brand } = useParams();
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const dealer = query.get("dealer");

    return (
        <div className="container mt-5">
            <a
                href={`/excel/${brand}?dealer=${dealer}`}
                className="text-secondary"
            >
                <TiArrowBack style={{ fontSize: "2.4rem" }} />
                Volver
            </a>
            <div className="d-flex justify-content-center">
                <h4 className="text-center mb-4 font-italic">
                    Ejemplo formato archivo excel -{" "}
                    <strong>{brand.toUpperCase()}</strong>
                </h4>
            </div>
            <Table brand={brand} />
        </div>
    );
};

export default Example;
