import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import ItemsListContainer from "./Components/ItemsListContainer/ItemsListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemsListContainer mensaje="Jeans Divas, ofrece lo mejor en ropa casual para damas en todas sus categorias" />
    </>
  );
}

export default App;
