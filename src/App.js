//Router
import { Switch, Route } from "react-router-dom";

// Components and web pages
import ReadProductos from "./pages/ReadProductos";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <Switch>
        {/*Inserte sus rutas entre este comentario*/}
        <Route exact path="/">
          <ReadProductos />
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
