import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LoadResult = () => {
    const location = useLocation();

    const navigate = useNavigate();

    console.log(location?.state?.result);

    useEffect(() => {
        if (!location?.state?.result) navigate("/");
    }, []);

    return (
        <>
            <div className="container">
                <div className="jumbotron  bg-light text-white m-4 rounded px-5">
                    <div className="container text-secondary">
                        <h1 className="display-5">Leads enviados con éxito!</h1>
                        <p className="lead">
                            Los leads han sido enviados a la API de{" "}
                            {location?.state?.brand}
                        </p>
                        <hr className="my-4"></hr>
                        <div className="d-flex">
                            <p className="lead mr-2">
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
                </div>
                <div className="mt-n5 p-5">
                    <p className="lead mt-3 text-center">IDs de Leads</p>
                    <div className="container">
                        <div className="row">
                            {location?.state?.result.map(
                                ({ leadId, name, lastname }, i) => (
                                    <div className="col-sm-4">
                                        <div key={i} className="card p-3 m-2">
                                            <h5 class="card-title">
                                                {i + 1} - {name} {lastname}
                                            </h5>

                                            {leadId}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoadResult;
