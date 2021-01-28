//Router
import { Switch, Route } from "react-router-dom";

// Components and web pages
import ReadProductos from "./pages/ReadProductos";
import Error from "./pages/Error";
import ModifyProduct from "./pages/ModifyProduct";
import InsertProducto from "./pages/InsertProducto";

const App = () => {
  return (
    <>
      <Switch>
        {/*Inserte sus rutas entre este comentario*/}
        <Route exact path="/">
          <ReadProductos />
        </Route>

        <Route exact path="/home">
            <ReadProductos />
        </Route>

        <Route path="/modifyProduct/:productId" children={<ModifyProduct />} />
        <Route path="/registrar-producto">
          <InsertProducto></InsertProducto>
        </Route>

        {/*Y este comentario*/}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
};

export default App;
