import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import NavBar from "../components/NavBar";
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <>
      <NavBar
        siteName={`Actualización del producto ${productId}`}
        sites={["Home"]}
      />
    </>
  );
};

export default ModifyProduct;
