import NavBar from "./NavBar";
import ProductsTable2 from "./ProductsTable2";

const ReadProductos = () => {
  return (
    <>
      <NavBar siteName="Revisión de productos" sites={["A", "B"]} />
      <ProductsTable2 />
    </>
  );
};

export default ReadProductos;
