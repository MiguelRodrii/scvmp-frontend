import { AiOutlineRest } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

const DeleteProductButton = ({productId}) => {
  const DELETE_PRODUCTO_MUT = gql(`
  mutation {
      deleteProducto (id:${productId} )
    }
  `);


  const [deleteProducto] = useMutation(DELETE_PRODUCTO_MUT);
  return (
    <>
       <Link to={`/`}>
        <Button variant="outline-secondary" onClick={() => {deleteProducto(); window.location.reload(false);}} >
          <AiOutlineRest />
        </Button>
        </Link>
    </>
  );
};

export default DeleteProductButton;