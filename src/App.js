//Router
import { Switch, Route } from "react-router-dom";

// Components and web pages
import ReadProductos from "./pages/ReadProductos";
import CreateVentas from "./pages/CreateVentas";
import Error from "./pages/Error";
import ModifyProduct from "./pages/ModifyProduct";
import InsertProducto from "./pages/InsertProducto";
import SearchClient from "./pages/SearchClient";


const App = () => {
  return (
    <>
      <Switch>
        {/*Inserte sus rutas entre este comentario*/}
        <Route exact path="/">
          <ReadProductos />
        </Route>

        <Route path="/home">
            <ReadProductos />
        </Route>

        <Route exact path="/buscar-cliente">
            <SearchClient />
        </Route>
        <Route exact path="/registrar-venta">
            <CreateVentas />
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
