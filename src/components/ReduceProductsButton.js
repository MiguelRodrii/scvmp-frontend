import Button from 'react-bootstrap/Button'
import { AiFillMinusCircle } from "react-icons/ai";

const ReduceProductsButton = () => {
    return (
        <Button variant="outline-secondary" type="submit" ><AiFillMinusCircle/></Button>
    );
}

export default ReduceProductsButton;