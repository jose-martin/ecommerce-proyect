import { createContext, useState, useContext } from "react";

export const cartContext = createContext({
  cart: [],
  total: 0,
  addToCart: (producto, cantidad) => {},
  limpiarCarrito: () => {},
  removeFromCart: (produ) => {},
  agregarDisminuirCarrito:(producto,cantidad)=>{},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (produ, cant) => {
    const newCart = cart.slice();
    const existInCart = newCart.find((x) => x.id === produ.id);

    if (!existInCart) {
      setCart([...cart, { ...produ, cant }]);
    } else {
      existInCart.cant = Number(existInCart.cant) + Number(cant);
      setCart([...newCart]);
    }
  };
  const terminarCompra = () => {
    return alert("Gracias por su compra", limpiarCarrito());
  };
  const limpiarCarrito = () => {
    setCart([]);
  };

  const removeFromCart = (produ) => {
    // Usar la funcion filter y actualiza el carrito
    setCart(cart.filter((producto) => producto.id !== produ.id));
  };

 // @param {*} produ
 // @param {number} cantidad

  const agregarDisminuirCarrito=(produ,cantidad)=>{
    const newCart=cart.slice();
    const producto=newCart.find((x)=>x.id===produ.id);

    if (!producto){
alert("El producto no existe en el carrito");
      
    }else{
      if (producto.cant>=10&&cantidad>0){
        alert("Limite de compra");
        return;
      }else if (producto.cant===1&&cantidad<0){
        alert("Limite de reduccion de producto");
        return;
      }
      producto.cant+=Number(cantidad);
    }
setCart(newCart);
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        total: cart.reduce(
          (total, item) => total + Number(item.cant) * Number(item.precio),
          0
        ),
        addToCart,
        limpiarCarrito,
        removeFromCart,
        terminarCompra,
        agregarDisminuirCarrito,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(cartContext);
};
