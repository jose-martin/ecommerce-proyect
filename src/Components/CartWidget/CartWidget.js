import React from "react";
import { Link } from "react-router-dom";
import carrito from "../../img/carrito.png";
import "../CartWidget/CartWidget.css";
import { useCart } from "../../context/CartProvider";
const CartWidget = () => {
  const { cart } = useCart();
  return (
    <Link to="/carrito">
      <div className="contedor-carrito">
        <img className="img-carrito" src={carrito} alt="carrito" />
        <span className="carrito-cantidad">
          <p>{cart.length > 0 && cart.length}</p>
        </span>
      </div>
    </Link>
  );
};

export default CartWidget;
