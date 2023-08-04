import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { DetalleProductoContainer } from "./components/pages/detalleProducto/DetalleProductoContainer";
import { ItemsCarrito } from "./components/pages/itemsCarrito/ItemsCarrito";

function App() {
  return (
    <BrowserRouter>
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
