import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import "../PageDetail/PageDetail.css"
import { Link } from "react-router-dom";

const PageDetail = () => {
  const { id } = useParams();
  const producto = data.find((product) => product.id === Number(id));
  console.log(producto);
  if (!producto) return <div>Cargando...</div>;
  return (
    <div className="page-detail">
      <h3>{producto.nombre}</h3>

      <img className="img-detalle"src={producto.foto}></img>

      <span>S/ {producto.precio}</span>

      <Link to="carrito">

      <button className="agregar-carrito">Comprar</button>

      </Link>

    </div>
  );
};

export default PageDetail;
