//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//General CSS used imports
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

// Components
import ReadProductos from "./components/ReadProductos";
import Error from "./components/Error";

const App = () => {
  return (
    <>
      <Router>
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
      </Router>
    </>
  );
};

export default App;
