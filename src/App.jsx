import { useState } from "react";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import ItemList from "./components/pages/ItemList/ItemList";

function App() {
  const [saludar, setSaludar] = useState("Bienvenido ");
  const cambiarSaludar = (nombre) => {
    setSaludar(nombre);
  };
  return (
    <div>
      <NavBar />
      <ItemList
        cambiarSaludar={cambiarSaludar}
        saludar={saludar}
        usuario="Julian "
      />
      <Footer />
    </div>
  );
}
export default App;
