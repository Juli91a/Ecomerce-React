import { useState, useEffect } from "react";
import { productos } from "../../../productos";
import { useParams } from "react-router-dom";

export const DetalleProductoContainer = () => {
  const [producto, setProducto] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productoElegido = productos.find((elemento) => elemento.id === +id);
    const tarea = new Promise((res) => {
      res(productoElegido);
    });
    tarea.then((res) => setProducto(res));
  }, [id]);
  return (
    <div
      style={{
        border: "solid 1px black",
        padding: "10px 0",
        textAlign: "center",
      }}
    >
      <h2>{producto.title}</h2>
      <h3>{producto.description}</h3>
    </div>
  );
};
