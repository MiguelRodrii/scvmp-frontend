import { AiOutlineRest } from "react-icons/ai";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

const DeleteProductButton = ({productId, update}) => {
  const DELETE_PRODUCTO_MUT = gql(`
  mutation {
      deleteProducto (id:${productId} )
    }
  `);


  const [deleteProducto] = useMutation(DELETE_PRODUCTO_MUT);
  return (
    <>
       <Link to={`/`}>
        <Button variant="outline-secondary" onClick={() => {deleteProducto(); update();}} >
          <AiOutlineRest />
        </Button>
        </Link>
    </>
  );
};

DeleteProductButton.propTypes = {
  update: PropTypes.func
};

export default DeleteProductButton;