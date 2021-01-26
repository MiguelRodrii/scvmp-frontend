//Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//General CSS used imports
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

// Components
import ProductsTable from "./components/ProductsTable2";
import Error from "./components/Error";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          {/*Inserte sus rutas entre este comentario*/}

          <Route exact path="/">
            <ProductsTable />
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
