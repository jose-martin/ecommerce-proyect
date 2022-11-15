import { Link } from "react-router-dom";
import "./ItemDetail.css";
const ItemDetail = ({ product }) => {
  return (
    <Link to={`/producto/${product.id}`} style={{ textDecoration: "none" }}>
      <div className="item-detail">
        <h3>{product.nombre}</h3>
        <span>S/ {product.precio}</span>
        <img src={product.foto}></img>
      </div>
    </Link>
  );
};

export default ItemDetail;
