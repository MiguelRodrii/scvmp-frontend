import { useQuery, gql } from "@apollo/client";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const GET_PRODUCTOS = gql`
  {
    productos {
      id
      costo_compra_no_iva
      costo_venta_no_iva
      cantidad_disponible
      fecha_expiracion
    }
  }
`;

const ProductsTable2 = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTOS);

  const editButton = () => {
    return (
      <>
        <Button
          type="button"
          icon="pi pi-cog"
          className="p-button-secondary"
        ></Button>
      </>
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <DataTable value={data.productos}>
        <Column field="id" header="Id"></Column>
        <Column field="costo_compra_no_iva" header="C. Compra sin iva"></Column>
        <Column field="cantidad_disponible" header="C. disponible"></Column>
        <Column field="fecha_expiracion" header="F. Expiracion"></Column>
        <Column body={editButton}></Column>
      </DataTable>
    </>
  );
};

export default ProductsTable2;
