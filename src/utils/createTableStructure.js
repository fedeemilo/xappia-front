export const createTableStructure = (ths, trs, brand = '') => (
    <>
        <table className="table table-bordered">
            <thead className="thead-light">
                <tr>
                    {ths.map((th, i) => (
                        <th key={`th-${i}`} scope="col">
                            {th.name}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {trs.map((tr, i) => (
                    <tr key={`tr-${i}`}>
                        {Object.keys(tr).map((key, i) => (
                            <td key={`td-${i}`}>{tr[key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
        {brand === 'chevrolet' && (
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
)
