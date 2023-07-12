import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { DetalleProductoContainer } from "./components/pages/DetalleProducto/DetalleProductoContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categorias" element={<ItemListContainer />} />
          <Route
            path="/detalleProducto/:id"
            element={<DetalleProductoContainer />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
