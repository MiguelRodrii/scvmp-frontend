import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import NavBar from "../components/NavBar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ModifyProduct = () => {
  const productId = parseInt(useParams().productId, 10);

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

  const { loading, error, data } = useQuery(GET_PRODUCTO);

  const isLetter = (str) => {
    return str.length === 1 && str.match(/[a-z]/i);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  let stringDate = data.productos[0].fecha_expiracion;
  let stringDateWithBackSlash = "";
  for (let index = 0; index < stringDate.length; index++) {
    if (isLetter(stringDate.charAt(index))) {
      break;
    } else if (stringDate.charAt(index) === "-") {
      stringDateWithBackSlash += "-";
    } else {
      stringDateWithBackSlash += stringDate.charAt(index);
    }
  }

  console.log(stringDateWithBackSlash);

  return (
    <>
      <NavBar
        siteName={`Actualización del producto ${productId}`}
        sites={["Home"]}
      />
      <Card body>
        <Form>
          <Form.Group controlId={`formUPCC${productId}`}>
            <Form.Label>Costo de compra (sin iva)</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Ingrese un costo separado por punto"
              step="0.01"
              min="0.01"
              max="1000"
              defaultValue={data.productos[0].costo_compra_no_iva}
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
              defaultValue={data.productos[0].costo_venta_no_iva}
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
              defaultValue={data.productos[0].cantidad_disponible}
            />
          </Form.Group>

          <Form.Group controlId={`formUPFE${productId}`}>
            <Form.Label>Fecha de expiración</Form.Label>
            <Form.Control
              required
              type="date"
              defaultValue={stringDateWithBackSlash}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default ModifyProduct;
