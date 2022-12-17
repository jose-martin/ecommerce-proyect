import { createContext, useState, useContext } from "react";

export const cartContext = createContext({
  cart: [],
  total: 0,
  addToCart: (producto, cantidad) => {},
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

  const limpiarCarrito = () => setCart([]);

  const removeFromCart = (produ) => {
    // Usar la funcion filter y actualiza el carrito
    setCart(cart.filter(producto => producto.id !== produ.id));
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
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(cartContext);
};
