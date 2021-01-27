import NavBar from "../components/NavBar";
import ProductsTable from "../components/ProductsTable";

const ReadProductos = () => {
  return (
    <>
      <NavBar siteName="Revisión" sites={["Ventas", "Actualización"]} />
      <ProductsTable />
    </>
  );
};

export default ReadProductos;
