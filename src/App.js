import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { default as ItemListContainer } from "./Components/ItemsListContainer/ItemsListContainer";
import { itemTipo } from "./data/data";
import PageDetail from "./Components/PageDetail/PageDetail";

function App() {
  return (
    <>
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
          <Route path="/producto/:id" element={<PageDetail />} 
          />

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
