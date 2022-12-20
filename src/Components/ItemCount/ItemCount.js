import { useCart } from "../../context/CartProvider";
import "../ItemCount/ItemCount.css";
const ItemCount = ({ producto }) => {
  const { agregarDisminuirCarrito } = useCart();

  return (
    <div className="contenedor">
      <button
        onClick={() => agregarDisminuirCarrito(producto, 1)}
        className="suma"
      >
        +
      </button>
      <button
        onClick={() => agregarDisminuirCarrito(producto, -1)}
        className="resta"
      >
        -
      </button>
    </div>
  );
};

export default ItemCount;
