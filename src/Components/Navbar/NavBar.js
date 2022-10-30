import logo from "../../img/logo.jpg";
import "../Navbar/NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <img src={logo} className="logo-img" alt="logo"></img>

      <ul className="menu-Item">
        <li className="lista">
          <a href="" className="menu">
            Categorias
          </a>
        </li>
        <li className="lista">
          <a href="" className="menu">
            Damas
          </a>
        </li>
        <li className="lista">
          <a href="" className="menu">
            Niñas
          </a>
        </li>
        <li className="lista">
          <a href="" className="menu">
            Productos
          </a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
