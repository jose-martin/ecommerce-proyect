import { useCart } from "../../context/CartProvider";
import "../PageCart/PageCart.css"
import { Link } from "react-router-dom";
export const PageCart = () => {
  const { cart,total } = useCart();

  return (
    <div>
      {cart.map((item) => {
        return (
          <div className="contenedor">
            <img className ="img-cart"src={item.foto}/>
            <div className="nombre-cart">{item.nombre}</div>
            <div className="precio-cart">Precio S/.{item.precio}</div>
            <div className="cantidad-cart">Cantidad: {item.cant}</div>
          </div>
        );
      })}
      <div className="total">
        TOTAL: S/{total.toFixed(2)}
        
      </div>
      <div className="botones">
      <button className="vaciar">Vaciar Carrito</button>
      <button className="terminar">Terminar Compra</button>
      </div>
      <div>
        <Link to="/">
        <button className="seguir">Seguir Comprando</button>
        </Link>
      </div>
    </div>
  );
};
