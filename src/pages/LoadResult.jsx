import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LoadResult = () => {
    const location = useLocation();

    const navigate = useNavigate();

    useEffect(() => {
        if (!location?.state?.result) navigate("/");
    }, []);

    return (
        <>
            <div className="jumbotron jumbotron-fluid m-4 rounded">
                <div className="container">
                    <h1 className="display-5">Leads enviados con éxito!</h1>
                    <p className="lead">
                        Los leads han sido enviados a la API de{" "}
                        {location?.state?.brand}
                    </p>
                    <hr className="my-4"></hr>
                    <p className="lead">
                        <a
                            className="btn btn-outline-info btn-lg"
                            href={`/excel/${location?.state?.brand}`}
                            role="button"
                        >
                            Cargar nuevo
                        </a>
                    </p>
                </div>
            </div>
            <div className="mt-n5 p-5">
                <p className="lead mt-3">IDs de Leads</p>
                <ul className="list-group">
                    {location?.state?.result.map((lead, i) => (
                        <li
                            key={i}
                            className="list-group-item list-group-item-info"
                        >
                            {lead}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default LoadResult;
