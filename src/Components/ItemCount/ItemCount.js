import "../ItemCount/ItemCount.css";
const ItemCount = ({ setCount }) => {
  const addItem = () => {
    setCount((currentValue) => {
      if (currentValue >= 10) {
        alert("Limite de Compra");
      } else {
        return currentValue + 1;
      }
    });
  };
  const removeItem = () => {
    setCount((currentValue) => {
      if (currentValue > 0) {
        return currentValue - 1;
      } else {
        return currentValue;
      }
    });
  };
  return (
    <div className="contenedor">
      <button onClick={addItem} className="suma">
        +
      </button>
      <button onClick={removeItem} className="resta">
        -
      </button>
    </div>
  );
};

export default ItemCount;
