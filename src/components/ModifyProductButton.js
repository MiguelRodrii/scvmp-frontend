import { BsPencil } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ModifyProductButton = ({ idProducto }) => {
  return (
    <>
      <Link to={`/modifyProduct/${idProducto}`}>
        <Button variant="outline-secondary">
          <BsPencil />
        </Button>
      </Link>
    </>
  );
};

export default ModifyProductButton;
