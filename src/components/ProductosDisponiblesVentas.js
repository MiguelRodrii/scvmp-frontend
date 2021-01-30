import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import AddPreSoldProductButton from "./AddPreSoldProductButton";
import React, {useState} from "react";

const ProductosDisponiblesVentas = ({ productos, dispatch }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Card body>
        <Table responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Costo compra sin iva</th>
              <th>Costo venta sin iva</th>
              <th>Cantidad disponible</th>
              <th>Fecha expiración</th>
              <th><input onChange={(e) => {setQuantity(e.target.value)}} type="number" min="1" max="1000" step="1" required defaultValue={quantity}></input></th>
            </tr>
          </thead>
          <tbody>
            {productos.disponibles.map(
              ({
                id,
                costo_compra_no_iva,
                costo_venta_no_iva,
                cantidad_disponible,
                fecha_expiracion,
                descripcion
              }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{descripcion.nombre}</td>
                  <td>{costo_compra_no_iva}</td>
                  <td>{costo_venta_no_iva}</td>
                  <td>{cantidad_disponible}</td>
                  <td>{fecha_expiracion}</td>
                  <td><AddPreSoldProductButton id={id} dispatch={dispatch} cantidad={quantity}/></td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default ProductosDisponiblesVentas;
