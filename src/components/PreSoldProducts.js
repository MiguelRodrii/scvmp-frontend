import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import ReduceProductsButton from "./ReduceProductsButton";

const PreSoldProducts = ({ productos, dispatch }) => {

    const [quantity, setQuantity] = useState(1);

    const a = [...productos.preAdquiridos];

    if (a < 1) {
        return (<h2>No se han encontrado productos para mostrar, agregue algunos para continuar.</h2>);
    } else {
        return (
            <>
                <Card body>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th><input onChange={(e) => { setQuantity(e.target.value) }} type="number" min="1" max="1000" step="1" required defaultValue={quantity}></input></th>
                                <th>Id</th>
                                <th>Cantidad</th>
                                <th>Nombre</th>
                                <th>Precio unitario con iva</th>
                                <th>Precio total con iva</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.preAdquiridos.map(
                                ({
                                    id,
                                    cantidad,
                                    nombre,
                                    precioUnitario,
                                    total
                                }) => (
                                    <tr key={id}>
                                        <td><ReduceProductsButton></ReduceProductsButton></td>
                                        <td>{id}</td>
                                        <td>{cantidad}</td>
                                        <td>{nombre}</td>
                                        <td>{precioUnitario}</td>
                                        <td>{total}</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </Table>
                </Card>
            </>
        );
    }
}

export default PreSoldProducts;