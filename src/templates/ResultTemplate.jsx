import { capitalizeFirstLetter } from "../utils/capitalize";
import { exportData } from "../utils/exportData";

const ResultTemplate = ({ brand, dealer, result, children }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-5">
                    <div className="jumbotron bg-light text-white m-4 rounded px-5 text-center">
                        <div className="container text-secondary">
                            <h1 className="display-5">
                                Leads enviados con éxito!
                            </h1>
                            <p className="lead">
                                Los leads han sido enviados a la API de{' '}
                                {capitalizeFirstLetter(brand)}
                            </p>
                            <hr className="my-4"></hr>
                            <div className="d-flex justify-content-center">
                                <p className="lead mr-2">
                                    <a
                                        className="btn btn-outline-info btn-lg"
                                        href={`/excel/${brand}?dealer=${dealer}`}
                                        role="button"
                                    >
                                        Cargar nuevo
                                    </a>
                                    <a
                                        className="btn btn-secondary btn-lg ml-2"
                                        onClick={() => exportData(result)}
                                        role="button"
                                    >
                                        Descargar Leads
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="col-7 border rounded mt-4"
                    style={{
                        height: '44rem',
                        overflowY: 'scroll',
                        position: 'relative',
                        right: '1rem'
                    }}
                >
                    <div className="mt-n5 p-5">
                        <p className="lead mt-3 text-center">IDs de Leads</p>
                        <div className="container">
                            <div className="row">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultTemplate;
