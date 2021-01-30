import NavBar from "../components/NavBar";
import ProductosDisponiblesVentas from "../components/ProductosDisponiblesVentas";

const CreateVentas = () => {
  return (
    <>
      <NavBar siteName="Registro de Ventas" sites={["Home", "Registrar producto"]} />
      <ProductosDisponiblesVentas />
    </>
  );
};

export default CreateVentas;
