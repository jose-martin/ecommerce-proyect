import { useParams,useNavigate } from "react-router-dom";
import { data } from "../../data/data";
import "../PageDetail/PageDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useCart } from "../../context/CartProvider";

const PageDetail = () => {
  const navigate = useNavigate()
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const producto = data.find((product) => product.id === Number(id));

  const {  addToCart } = useCart();
  if (!producto) return <div>Cargando...</div>;

  return (
    <div className="page-detail">
      <h3>{producto.nombre}</h3>

      <img className="img-detalle" src={producto.foto}></img>

      <span>S/ {producto.precio}</span>

        <button
          className="agregar-carrito"
          onClick={() => {
            addToCart(producto, count);
            navigate("/carrito")
          }}
        >
          Comprar
        </button>

      <p className="description">{producto.descripcion}</p>
      <ItemCount setCount={setCount} />
      <span className="contador">{count}</span>
      
    </div>
  );
};

export default PageDetail;
