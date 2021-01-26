import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
