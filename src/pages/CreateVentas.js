import NavBar from "../components/NavBar";
import { useQuery, gql } from "@apollo/client";
import CreateVentaBody from "../components/CreateVentaBody";

const GET_PRODUCTOS = gql(`
query {
  productosVendibles {
    id
    costo_compra_no_iva
    costo_venta_no_iva
    cantidad_disponible
    fecha_expiracion
    descripcion {
      id
      nombre
    }
  }
}
`);

const CreateVentas = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTOS, {
    fetchPolicy: "no-cache"
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <NavBar siteName="Registro de Ventas" sites={["Home", "Registrar producto"]} />
      <CreateVentaBody productosDisponibles={data}></CreateVentaBody>
    </>
  );
};

export default CreateVentas;
