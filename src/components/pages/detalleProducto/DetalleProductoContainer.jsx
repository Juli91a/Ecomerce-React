import { useState, useEffect } from "react";
import { productos } from "../../../productos";
import { useParams } from "react-router-dom";
import ContadorContainer from "../../common/contador/ContadorContainer";

export const DetalleProductoContainer = () => {
  const [producto, setProducto] = useState({});

  const { id } = useParams();
  useEffect(() => {
    let productoElegido = productos.find((elemento) => elemento.id === +id);
    const producto = new Promise((res) => {
      res(productoElegido);
    });
    producto.then((res) => setProducto(res));
  }, [id]);
  const onAdd = (cantidad) => {
    alert(`Se agregaron ${cantidad} unidades al carrito`);
  };
  return (
    <div
      style={{
        border: "solid 1px black",
        padding: "10px 0",
        textAlign: "center",
        maxWidth: 500,
      }}
    >
      <h2>{producto.title}</h2>
      <h3>{producto.description}</h3>
      <img src={producto.img} style={{ maxWidth: 200 }} />
      <ContadorContainer stock={producto.stock} onAdd={onAdd} />
    </div>
  );
};
