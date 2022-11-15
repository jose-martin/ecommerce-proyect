import React from "react";
import { Link } from "react-router-dom";
import carrito from "../../img/carrito.png";
import "../CartWidget/CartWidget.css";
const CartWidget = () => {
  return (
    <Link to="carrito">
      <div className="contedor-carrito">
        <img className="img-carrito" src={carrito} alt="carrito" />
        <span className="carrito-cantidad">
          <p>0</p>
        </span>
      </div>
    </Link>
  );
};

export default CartWidget;
