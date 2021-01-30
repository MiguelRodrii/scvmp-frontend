import { AiFillPlusCircle } from "react-icons/ai"
import Button from 'react-bootstrap/Button'

const AddPreSoldProductButton = ({ dispatch, id, cantidad}) => {


    return (
        <>
            <Button variant="outline-secondary" type="submit" onClick={() => {dispatch({
                type: "addProduct",
                cantidad: cantidad,
                id: id
                })}}><AiFillPlusCircle></AiFillPlusCircle></Button>
        </>
    );
}
export default AddPreSoldProductButton;