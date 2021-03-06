import React from "react";

const Table = ({ brand }) => {
    if (brand === "toyota")
        return (
            <table className="table table-bordered">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Nombre y Apellido</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Email</th>
                        <th scope="col">Modelo de Interés</th>
                        <th scope="col">Consulta</th>
                        <th scope="col">Origen</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Raúl Daneri</th>
                        <td>1164111357</td>
                        <td>rauldaneri@gmail.com</td>
                        <td>1</td>
                        <td>
                            Hilux / Anticipo y Cuotas / Entrega Corto Plazo /
                            Cualquier Horario
                        </td>
                        <td>AGP</td>
                    </tr>
                    <tr>
                        <th scope="row">Juan Ciriaco</th>
                        <td>1157003355</td>
                        <td>rauldaneri@gmail.com</td>
                        <td>1</td>
                        <td>
                            Corolla / Anticipo y Cuotas / Aún no decido como
                            retirar / Cualquier Horario
                        </td>
                        <td>AGP</td>
                    </tr>
                    <tr>
                        <th scope="row">Juan Guzman</th>
                        <td>1123001677</td>
                        <td>rauldaneri@gmail.com</td>
                        <td>227</td>
                        <td>
                            Yaris / Anticipo y Cuotas / Entrega Corto Plazo /
                            Cualquier Horario
                        </td>
                        <td>AGP</td>
                    </tr>
                </tbody>
            </table>
        );

    if (brand === "volkswagen")
        return (
            <table className="table table-bordered">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Nombre y Apellido</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Email</th>
                        <th scope="col">ID Concesionario</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Origen</th>
                        <th scope="col">Autoahorro</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Rafael Sosa</th>
                        <td>1164111357</td>
                        <td>rafasosa@gmail.com</td>
                        <td>001f00001jjQnOAAU</td>
                        <td>Nuevo T-Cross</td>
                        <td>WBC</td>
                        <td>True</td>
                    </tr>
                    <tr>
                        <th scope="row">Alma Perez</th>
                        <td>1164111357</td>
                        <td>almaperez@gmail.com</td>
                        <td>001f00101jjQnOffU</td>
                        <td>Nuevo T-Cross</td>
                        <td>WBC</td>
                        <td>False</td>
                    </tr>
                    <tr>
                        <th scope="row">Pedro Gutierrez</th>
                        <td>1164111357</td>
                        <td>pedro.guti@gmail.com</td>
                        <td>11g0400001jjQnOAAU</td>
                        <td>Nuevo T-Cross</td>
                        <td>WBC</td>
                        <td>True</td>
                    </tr>
                </tbody>
            </table>
        );
};

export default Table;
