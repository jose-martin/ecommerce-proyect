import eliminar from "../../img/eliminar.png"

import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartProvider";
import "../PageCart/PageCart.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export const PageCart = () => {
  const { cart, total, limpiarCarrito, removeFromCart, terminarCompra } = useCart();
  const [count,setCount]=useState(1);
  return (
    <div>
      {cart.map((item) => {
        return (
          <div className="contenedor">
            <img className="img-cart" src={item.foto} />
            <div className="nombre-cart">{item.nombre}</div>
            <div className="precio-cart">Precio S/.{item.precio}</div>
            <div className="cantidad-cart">Cantidad: {item.cant}</div>
            
            <div>
              
               <img onClick={() => removeFromCart(item)}  src={eliminar} alt="eliminar" className="eliminar"/>
               <ItemCount setCount={setCount}/>
               
              </div>
             
          </div>
        );
      })}
      <div className="total">TOTAL: S/{total.toFixed(2)}</div>
      <div className="botones">
        <button className="vaciar" onClick={() => limpiarCarrito()}>
          Vaciar Carrito
        </button>
        <button className="terminar" onClick={terminarCompra}>Terminar Compra</button>
      </div>
      <div>
        <Link to="/">
          <button className="seguir">Seguir Comprando</button>
        </Link>
      </div>
    </div>
  );
};
