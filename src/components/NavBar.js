import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../assests/css/Main.css";
import logo from "../assests/images/book.png";

function NavBar({ siteName }) {
  return (
    <>
      <header>
        <div className="grid-container-2 headBar">
          <div>
            <Link to="/">
              <img className="grow" src={logo} alt="logo"></img>
            </Link>
            <hi>
              <strong>{siteName}</strong>
            </hi>
          </div>
          <div>
            <nav>
              <ul className="menu">
                <li>
                  <Link to="/">Registrar productos</Link>
                </li>
                <li>
                  <Link to="/">Registrar productos</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
