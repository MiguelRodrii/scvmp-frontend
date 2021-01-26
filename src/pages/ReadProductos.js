import NavBar from "../components/NavBar";
import ProductsTable2 from "../components/ProductsTable2";

const ReadProductos = () => {
  return (
    <>
      <NavBar siteName="Revisión de productos" sites={["A", "B"]} />
      <ProductsTable2 />
    </>
  );
};

export default ReadProductos;
