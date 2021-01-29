import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../assests/css/Main.css";
import logo from "../assests/images/book.png";

NavBar.defaultProps = {
  siteName: "Bienvenido",
  sites: ["index"]
};

NavBar.propTypes = {
  siteName: PropTypes.string,
  sites: PropTypes.arrayOf(PropTypes.string)
};

function NavBar({ siteName, sites }) {
  return (
    <>
      <header>
        <div className="grid-container-2 headBar">
          <div>
            <Link to="/">
              <img className="grow" src={logo} alt="logo"></img>
            </Link>
            <h2>
              <strong>{siteName}</strong>
            </h2>
          </div>
          <div>
            <nav>
              <ul className="menu">
                {sites.map((site) => {
                  const trueSite = site.toLowerCase().replace(/\s/g, '-');
                  return (
                    <li key={trueSite}>
                      <Link to={`/${trueSite}`} >{site}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
