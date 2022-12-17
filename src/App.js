import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { default as ItemListContainer } from "./Components/ItemsListContainer/ItemsListContainer";
import { itemTipo } from "./data/data";
import PageDetail from "./Components/PageDetail/PageDetail";
import { CartProvider } from "./context/CartProvider";
import { PageCart } from "./Components/PageCart/PageCart";
function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/damas"
              element={<ItemListContainer type={itemTipo.DAMA} />}
            />
            <Route
              path="/niñas"
              element={<ItemListContainer type={itemTipo.KIDS} />}
            />
            <Route path="/producto/:id" element={<PageDetail />} />
            <Route path="/carrito" element={<PageCart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
