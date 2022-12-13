import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import "../PageDetail/PageDetail.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
const PageDetail = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const producto = data.find((product) => product.id === Number(id));
  console.log(producto);
  if (!producto) return <div>Cargando...</div>;
  return (
    <div className="page-detail">
      <h3>{producto.nombre}</h3>

      <img className="img-detalle" src={producto.foto}></img>

      <span>S/ {producto.precio}</span>

      <Link to="carrito">
        <button className="agregar-carrito">Comprar</button>
      </Link>
      <p className="description">{producto.descripcion}</p>
      <span>{count}</span>
      <ItemCount setCount={setCount} />
    </div>
  );
};

export default PageDetail;
