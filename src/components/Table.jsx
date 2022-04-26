import React from "react";

const Table = () => {
    return (
        <table class="table table-bordered">
            <thead class="thead-light">
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
                        Corolla / Anticipo y Cuotas / Aún no decido como retirar
                        / Cualquier Horario
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
};

export default Table;
