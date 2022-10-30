import React from "react";
import "../ItemsListContainer/ItemsListContainer.css";
const ItemsListContainer = ({ mensaje }) => {
  return (
    <div className="contenedor-mensaje">
      <p className="mensaje-uno">{mensaje}</p>
    </div>
  );
};

export default ItemsListContainer;
