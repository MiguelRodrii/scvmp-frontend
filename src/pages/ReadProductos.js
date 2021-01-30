import NavBar from "../components/NavBar";
import ProductsTable from "../components/ProductsTable";

const ReadProductos = () => {
  return (
    <>
      <NavBar siteName="Revisión" sites={["Home", "Registrar producto", "Registrar venta","Buscar cliente"]} />
      <ProductsTable />
    </>
  );
};

export default ReadProductos;
