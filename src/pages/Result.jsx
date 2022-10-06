import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter } from '../utils/capitalize';
import { exportData } from '../utils/exportData';

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const result = location?.state?.result;
    const brand = location?.state?.brand;
    const dealer = location?.state?.dealer;

    console.log(result);

    const dataIsNull = () =>
        Array.isArray(result) ? result?.every(lead => lead === null) : false;
    const leadsWithoutData = dataIsNull();

    useEffect(() => {
        if (!result || leadsWithoutData)
            navigate(`/error?brand=${brand}&dealer=${dealer}`);
    }, []);

    if (brand === 'chevrolet')
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
                            <p className="lead mt-3 text-center">
                                IDs de Leads
                            </p>
                            <div className="container">
                                <div className="row">
                                    {result.length &&
                                        !leadsWithoutData &&
                                        result?.map(
                                            ({ leadId, lastname, email }, i) => (
                                                <div className="col-sm-4">
                                                    <div
                                                        key={i}
                                                        className="card p-3 m-2"
                                                    >
                                                        <small className="card-title">
                                                            {i + 1} - {lastname}{' '}
                                                            {email}
                                                        </small>
                                                        <p className='bold'>{leadId}</p>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    if (brand === 'toyota')
        return (
            <>
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
                                                onClick={() =>
                                                    exportData(result)
                                                }
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
                                <p className="lead mt-3 text-center">
                                    IDs de Leads
                                </p>
                                <div className="container">
                                    <div className="row">
                                        {result.length &&
                                            !leadsWithoutData &&
                                            result?.map(
                                                (
                                                    { leadId, name, lastname },
                                                    i
                                                ) => (
                                                    <div className="col-sm-4">
                                                        <div
                                                            key={i}
                                                            className="card p-3 m-2"
                                                        >
                                                            <h5 className="card-title">
                                                                {i + 1} - {name}{' '}
                                                                {lastname}
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
                    </div>
                </div>
            </>
        );

    if (brand === 'volkswagen')
        return (
            <div className="d-flex justify-content-center mt-5 flex-column align-items-center">
                <h3>{result?.message}</h3>
                <a href="/excel/volkswagen">Cargar nuevo excel</a>
            </div>
        );
};

export default Result;
