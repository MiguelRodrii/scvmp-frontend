import { useParams } from "react-router-dom";

const ModifyProduct = () => {
  const productId = useParams();

  console.log(productId);

  return (
    <>
      <h1>Smntin</h1>
    </>
  );
};

export default ModifyProduct;
