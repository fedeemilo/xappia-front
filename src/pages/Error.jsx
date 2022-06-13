import { useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/capitalize";
import { BsInfoCircle } from "react-icons/bs";

const Error = () => {
    const search = useLocation().search;
    const brand = new URLSearchParams(search).get("brand");
    const dealer = new URLSearchParams(search).get("dealer");
    const error = new URLSearchParams(search).get("error");

    console.log(error);

    if (brand === "toyota")
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="jumbotron bg-danger text-white m-4 rounded px-5 text-center">
                                <div className="container text-white">
                                    <h1 className="display-5">
                                        {error ||
                                            "Ha ocurrido un error en la respuesta de Leads"}
                                    </h1>
                                    {error?.includes("Fuente") && (
                                        <p className="lead">
                                            <BsInfoCircle /> Revise la validez
                                            del Dealer {dealer} de{" "}
                                            {capitalizeFirstLetter(brand)}
                                        </p>
                                    )}
                                    <hr
                                        className="my-4"
                                        style={{ backgroundColor: "white" }}
                                    ></hr>
                                    <div className="d-flex justify-content-center">
                                        <p className="lead mr-2">
                                            <a
                                                className="btn btn-outline-light btn-lg"
                                                href={"/"}
                                                role="button"
                                            >
                                                Volver al Inicio
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
};

export default Error;
