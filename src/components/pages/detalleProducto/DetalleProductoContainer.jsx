import { useState, useEffect, useContext } from "react";
import { productos } from "../../../productos";
import { useParams } from "react-router-dom";
import ContadorContainer from "../../common/contador/ContadorContainer";
import { CarritoContext } from "../../context/CarritoContext";

export const DetalleProductoContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const { agregarCarrito, elementoCarrito } = useContext(CarritoContext);

  const cantidadTotal = elementoCarrito(id);

  useEffect(() => {
    let productoElegido = productos.find((elemento) => elemento.id === +id);
    const producto = new Promise((res) => {
      res(productoElegido);
    });
    producto.then((res) => setProducto(res));
  }, [id]);
  const onAdd = (cantidad) => {
    alert(`Se agregaron ${cantidad} unidades de ${producto.titulo} al carrito`);
    let productoAgregado = { ...producto, cantidad };
    agregarCarrito(productoAgregado);
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
      <h2>{producto.titulo}</h2>
      <h3>{producto.descripcion}</h3>
      <img src={producto.img} style={{ maxWidth: 200 }} />
      <h4>${producto.precio} </h4>
      <ContadorContainer
        stock={producto.stock}
        onAdd={onAdd}
        inicial={cantidadTotal}
      />
    </div>
  );
};
