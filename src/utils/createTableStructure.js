export const createTableStructure = (ths, trs, brand = "") => (
    <>
        <table className="table table-bordered">
            <thead className="thead-light">
                <tr>
                    {ths.map(th => (
                        <th scope="col">{th.name}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {trs.map(tr => (
                    <tr>
                        {Object.keys(tr).map((key, i) => (
                            <td>{tr[key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        {brand === "chevrolet" && (
            <div className="d-flex">
                <span>
                    <strong>*</strong>
                </span>
                <footer className="font-italic text-muted">
                    Email y Telefono deben ser unicos en cada lead, de lo
                    contrario la peticion va a fallar.
                </footer>
            </div>
        )}
    </>
);
