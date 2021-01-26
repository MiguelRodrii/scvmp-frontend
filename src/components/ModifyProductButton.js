import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ModifyProductButton = ({ productId }) => {
  return (
    <>
      <Link to={`/modifyProduct/${productId}`}>
        <Button variant="outline-secondary">
          <BsPencil />
        </Button>
      </Link>
    </>
  );
};

export default ModifyProductButton;
