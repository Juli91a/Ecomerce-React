import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { DetalleProductoContainer } from "./components/pages/detalleProducto/DetalleProductoContainer";
import { ItemsCarrito } from "./components/pages/itemsCarrito/ItemsCarrito";
import CarritoProvider from "./components/context/CarritoContext";
import CheckoutContainer from "./components/pages/chekOut/ChekOutContainer";

function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categorias"
              element={<ItemListContainer />}
            />
            <Route
              path="/detalleProducto/:id"
              element={<DetalleProductoContainer />}
            />
            <Route path="/ItemsCarrito" element={<ItemsCarrito />}></Route>
            <Route path="/ChekOut" element={<CheckoutContainer />}></Route>
          </Route>
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </CarritoProvider>
    </BrowserRouter>
  );
}
export default App;
