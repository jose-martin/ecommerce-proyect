import logo from "../../img/logo.jpg";
import "../Navbar/NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <img src={logo} className="logo-img" alt="logo"></img>
      </Link>

      <ul className="menu-Item">
        <li className="lista">
          <NavLink to="/" className="menu">
            Catalogo
          </NavLink>
        </li>
        <li className="lista">
          <NavLink to="/damas" className="menu">
            Damas
          </NavLink>
        </li>
        <li className="lista">
          <NavLink to="/niñas" className="menu">
            Niñas
          </NavLink>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
