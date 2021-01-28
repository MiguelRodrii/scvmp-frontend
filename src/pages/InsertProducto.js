import ReactNotification, { store } from 'react-notifications-component';
import { useMutation, gql } from "@apollo/client";
import NavBar from "../components/NavBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const InsertProducto = () => {
  const PUSH_PRODUCTO = gql(`
  mutation CreateProducto($ccompra: Float!, $cventa: Float!, $cdisponible: Int!, $fexpiracion: Date!) {
    createProducto (producto: {
      costo_compra_no_iva: $ccompra
      costo_venta_no_iva: $cventa,
      cantidad_disponible: $cdisponible,
      fecha_expiracion: $fexpiracion,
      id_descripcion_producto: 1
    }) 
    {
      id
    }
  }
`);

  const [addTodo, { data }] = useMutation(PUSH_PRODUCTO);


  return (
    <>
      <ReactNotification />
      <NavBar
        siteName={`Registro de productos`}
        sites={["Home"]}
      />
      <Card body>
        <Form onSubmit={(e) => {
          e.preventDefault();
          addTodo({
            variables: {
              ccompra: parseFloat(e.target.costoCompra.value),
              cventa: parseFloat(e.target.costoVenta.value),
              cdisponible: parseInt(e.target.cantidadDisponible.value),
              fexpiracion: new Date(e.target.fechaExpiracion.value)
            }
          });
          const idCP = data.createProducto.id;
          store.addNotification({
            title: "Modificación exitosa",
            message: `El producto ${idCP} ha sido registrado de forma exitosa.`,
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
        }}>
          <Form.Group controlId={`formIPCC`}>
            <Form.Label>Costo de compra (sin iva)</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Ingrese un costo separado por punto"
              step="0.01"
              min="0.01"
              max="1000"
              defaultValue={1}
              name="costoCompra"
            />
          </Form.Group>
          <Form.Group controlId={`formIPCV`}>
            <Form.Label>Costo de venta (sin iva)</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Ingrese un costo separado por punto"
              step="0.01"
              min="0.01"
              max="1000"
              defaultValue={1}
              name="costoVenta"
            />
          </Form.Group>
          <Form.Group controlId={`formIPCD`}>
            <Form.Label>Cantidad disponible</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Ingrese la cantidad del producto actualmente disponible"
              step="1"
              min="1"
              max="1000000"
              defaultValue={1}
              name="cantidadDisponible"
            />
          </Form.Group>

          <Form.Group controlId={`formIPFE`}>
            <Form.Label>Fecha de expiración</Form.Label>
            <Form.Control
              required
              type="date"
              name="fechaExpiracion"
            />
          </Form.Group>

          <Button variant="primary" type="submit" >
            Registrar
          </Button>
        </Form>
      </Card>
    </>
  );
}

export default InsertProducto;