import React from "react";
import "../ItemsListContainer/ItemsListContainer.css";
import { data } from "../../data/data";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemsListContainer = ({ type }) => {
  const productos = type
    ? data.filter((producto) => producto.type == type)
    : data;
  return (
    <div className="contenedor-lista">
      {productos.map((product) => (
        <ItemDetail product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ItemsListContainer;
