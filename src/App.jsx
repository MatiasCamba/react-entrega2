import CartWidget from "./components/CartWidget/CartWidget";
import Logo from "./components/Logo/Logo";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./components/Cart/Cart";


function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <Logo />

          <Navbar />
          <Routes>


            <Route path="/" element={<ItemListContainer />} />



            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />



            <Route path="/item/:idItem" element={<ItemDetailContainer />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="*" element={<h2>EN CONSTRUCCION</h2>} />

          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>









  );
}

export default App;

