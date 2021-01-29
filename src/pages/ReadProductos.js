import NavBar from "../components/NavBar";
import ProductsTable from "../components/ProductsTable";

const ReadProductos = () => {
  return (
    <>
      <NavBar siteName="Revisión" sites={["Home", "Registrar producto","Registrar Ventas"]} />
      <ProductsTable />
    </>
  );
};

export default ReadProductos;
