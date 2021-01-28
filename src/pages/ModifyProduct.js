import ReactNotification, { store } from 'react-notifications-component';
import { useParams } from "react-router-dom";
import { useMutation, useQuery, gql } from "@apollo/client";
import NavBar from "../components/NavBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const isLetter = (str) => {
  return str.length === 1 && str.match(/[a-z]/i);
};

const ModifyProduct = () => {
  const productId = parseInt(useParams().productId, 10);
  let costoCompra;
  let costoVenta;
  let cantidadDisponible;
  let fechaExpiracion = "";

  const GET_PRODUCTO = gql(`
    {
      productos (id: ${productId}) {
        id
        costo_compra_no_iva
        costo_venta_no_iva
        cantidad_disponible
        fecha_expiracion
      }
    }
  `);

  const UPDATE_PRODUCTO = gql(`
  mutation {
    updateProducto (producto: {
      id: ${productId}, 
      costo_compra_no_iva: $ccompra,
      costo_venta_no_iva: $cventa,
      cantidad_disponible: $cdisponible,
      fecha_expiracion: "$fexpiracion"
    }) 
    {
      id
    }
  }
`);
  const [addTodo, { data2 }] = useMutation(UPDATE_PRODUCTO);

  const { loading, error, data } = useQuery(GET_PRODUCTO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  costoCompra = data.productos[0].costo_compra_no_iva;
  costoVenta = data.productos[0].costo_venta_no_iva;
  cantidadDisponible = data.productos[0].cantidad_disponible;

  let stringDate = data.productos[0].fecha_expiracion;

  for (let index = 0; index < stringDate.length; index++) {
    if (isLetter(stringDate.charAt(index))) {
      break;
    } else if (stringDate.charAt(index) === "-") {
      fechaExpiracion += "-";
    } else {
      fechaExpiracion += stringDate.charAt(index);
    }
  }


  return (
    <>
      <ReactNotification />
      <NavBar
        siteName={`Actualización del producto ${productId}`}
        sites={["Home"]}
      />
      <Card body>
        <Form onSubmit={(e) => {
          e.preventDefault();
          addTodo({ variables: { ccompra:e.target.costoCompra.value, cventa:e.target.costoVenta.value, cdisponible:e.target.cantidadDisponible.value, fexpiracion:e.target.costoCompra.fechaExpiracion} });
        }}>
          <Form.Group controlId={`formUPCC${productId}`}>
            <Form.Label>Costo de compra (sin iva)</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Ingrese un costo separado por punto"
              step="0.01"
              min="0.01"
              max="1000"
              defaultValue={costoCompra}
              name="costoCompra"
            />
          </Form.Group>
          <Form.Group controlId={`formUPCV${productId}`}>
            <Form.Label>Costo de venta (sin iva)</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Ingrese un costo separado por punto"
              step="0.01"
              min="0.01"
              max="1000"
              defaultValue={costoVenta}
              name="costoVenta"
            />
          </Form.Group>
          <Form.Group controlId={`formUPCD${productId}`}>
            <Form.Label>Cantidad disponible</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Ingrese la cantidad del producto actualmente disponible"
              step="1"
              min="1"
              max="1000000"
              defaultValue={cantidadDisponible}
              name="cantidadDisponible"
            />
          </Form.Group>

          <Form.Group controlId={`formUPFE${productId}`}>
            <Form.Label>Fecha de expiración</Form.Label>
            <Form.Control
              required
              type="date"
              defaultValue={fechaExpiracion}
              name="fechaExpiracion"
            />
          </Form.Group>

          <Button variant="primary" type="submit" >
            Modificar
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default ModifyProduct;
