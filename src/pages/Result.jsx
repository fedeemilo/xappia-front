import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ResultTemplate from '../templates/ResultTemplate'

const Result = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const result = location?.state?.result
    const brand = location?.state?.brand
    const dealer = location?.state?.dealer

    const dataIsNull = () =>
        Array.isArray(result) ? result?.every(lead => lead === null) : false
    const leadsWithoutData = dataIsNull()

    useEffect(() => {
        if (!result || leadsWithoutData)
            navigate(`/error?brand=${brand}&dealer=${dealer}`)
    }, [])

    if (brand === 'chevrolet')
        return (
            <ResultTemplate brand={brand} dealer={dealer} result={result}>
                {result.length &&
                    !leadsWithoutData &&
                    result?.map(({ leadId, lastname, email }, i) => (
                        <div key={leadId} className="col-sm-4">
                            <div
                                key={i}
                                className={`card p-3 m-2 w-100 ${
                                    String(leadId)?.includes('DUPLICADOS')
                                        ? 'border-warning'
                                        : String(leadId)?.includes('restarting')
                                        ? 'border-danger'
                                        : 'border-success'
                                }`}
                            >
                                <small className="card-title">
                                    {i + 1} - {lastname} {email}
                                </small>
                                <p
                                    className={`bold lead ${
                                        String(leadId)?.includes('DUPLICADOS')
                                            ? 'text-warning'
                                            : String(leadId)?.includes(
                                                  'restarting'
                                              )
                                            ? 'text-danger'
                                            : 'text-success'
                                    }`}
                                >
                                    {leadId}
                                </p>
                            </div>
                        </div>
                    ))}
            </ResultTemplate>
        )

    if (brand === 'toyota')
        return (
            <ResultTemplate brand={brand} dealer={dealer} result={result}>
                {result.length &&
                    !leadsWithoutData &&
                    result?.map(({ leadId, name, lastname }, i) => (
                        <div key={leadId} className="col-sm-4">
                            <div key={i} className="card p-3 m-2">
                                <h5 className="card-title">
                                    {i + 1} - {name} {lastname}
                                </h5>
                                <p className="bold text-success">{leadId}</p>
                            </div>
                        </div>
                    ))}
            </ResultTemplate>
        )

    if (brand === 'volkswagen')
        return (
            <div className="d-flex justify-content-center mt-5 flex-column align-items-center">
                <h3>{result?.message}</h3>
                <a href="/excel/volkswagen">Cargar nuevo excel</a>
            </div>
        )

    if (brand === 'ean')
        return (
            <ResultTemplate brand={brand} dealer={dealer} result={result}>
                {result.length &&
                    !leadsWithoutData &&
                    result?.map(
                        (
                            {
                                nombre,
                                apellido,
                                Proceso,
                                Aviso,
                                Prevalidacion,
                                Error
                            },
                            i
                        ) => (
                            <div key={nombre + i} className="col-sm-4">
                                <div key={i} className="card p-3 m-2">
                                    <h5 className="card-title">
                                        {i + 1} - {nombre} {apellido}
                                    </h5>
                                    <p className="bold text-success">
                                        Proceso: {Proceso}
                                    </p>
                                    <p className="bold text-success">
                                        Aviso: {Aviso}
                                    </p>
                                    <p className="bold text-success">
                                        Prevalidacion: {Prevalidacion}
                                    </p>
                                    <p className="bold text-success">
                                        Error: {Error}
                                    </p>
                                </div>
                            </div>
                        )
                    )}
            </ResultTemplate>
        )
}

export default Result
