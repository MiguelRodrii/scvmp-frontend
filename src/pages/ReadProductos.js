import NavBar from "../components/NavBar";
import ProductsTable from "../components/ProductsTable";

const ReadProductos = () => {
  return (
    <>
      <NavBar siteName="Revisión de productos" sites={["A", "B"]} />
      <ProductsTable />
    </>
  );
};

export default ReadProductos;
