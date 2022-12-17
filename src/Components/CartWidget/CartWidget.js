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
        {cart.length > 0 && (
          <span className="carrito-cantidad">
            <p>{cart.length}</p>
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartWidget;
