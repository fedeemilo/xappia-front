import { useLocation } from "react-router-dom";
import { capitalizeFirstLetter } from "../utils/capitalize";

const Error = () => {
    const location = useLocation();
    const search = useLocation().search;
    const brand = new URLSearchParams(search).get("brand");
    const dealer = new URLSearchParams(search).get("dealer");
    const error = new URLSearchParams(search).get("error");
    const validDealer = location?.state?.validDealer;

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
                                            (!validDealer &&
                                                "El Dealer ingresado no es válido") ||
                                            "Ha ocurrido un error en la respuesta de Leads"}
                                    </h1>
                                    <p className="lead">
                                        Vuelva a intentar realizar el envío a la
                                        API de {capitalizeFirstLetter(brand)} (
                                        {dealer})
                                    </p>
                                    <hr
                                        className="my-4"
                                        style={{ backgroundColor: "white" }}
                                    ></hr>
                                    <div className="d-flex justify-content-center">
                                        <p className="lead mr-2">
                                            <a
                                                className="btn btn-outline-light btn-lg"
                                                href={`/excel/${brand}?dealer=${dealer}`}
                                                role="button"
                                            >
                                                Intentar nuevamente
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
