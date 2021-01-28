import { useQuery, gql } from "@apollo/client";
import React, {useState} from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

//Components
import ModifyProductButton from "./ModifyProductButton";
import DeleteProductButton from "./DeleteProductButton";

const GET_PRODUCTOS = gql(`
  {
    productos {
      id
      costo_compra_no_iva
      costo_venta_no_iva
      cantidad_disponible
      fecha_expiracion
    }
  }
`);


const ProductsTable = () => {

  const { loading, error, data, refetch } = useQuery(GET_PRODUCTOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Card body>
        <Table responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Costo compra sin iva</th>
              <th>Costo venta sin iva</th>
              <th>Cantidad disponible</th>
              <th>Fecha expiracion</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.productos.map(
              ({
                id,
                costo_compra_no_iva,
                costo_venta_no_iva,
                cantidad_disponible,
                fecha_expiracion
              }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{costo_compra_no_iva}</td>
                  <td>{costo_venta_no_iva}</td>
                  <td>{cantidad_disponible}</td>
                  <td>{fecha_expiracion}</td>
                  <td>{<ModifyProductButton productId={id} />}</td>
                  <td >{<DeleteProductButton productId={id} update={refetch} />}</td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default ProductsTable;
