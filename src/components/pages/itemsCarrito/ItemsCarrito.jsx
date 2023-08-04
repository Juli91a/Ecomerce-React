import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

export const ItemsCarrito = () => {
  const { carrito, limpiarCarrito, eliminarProducto, precioTotal } =
    useContext(CarritoContext);
  let total = precioTotal();
  return (
    <div>
      <h1>Carritoooo</h1>

      {carrito.map((producto) => {
        return (
          <div
            key={producto.id}
            style={{
              border: "solid 1px black",
              padding: "10px 5px",
              margin: "2px",
              maxWidth: "50%",
              borderRadius: "10px",
            }}
          >
            <h3>{producto.cantidad}</h3>
            <h3> {producto.titulo} </h3>
            <h3> {producto.precio} </h3>
            <button onClick={() => eliminarProducto(producto.id)}>
              Eliminar producto
            </button>
          </div>
        );
      })}
      <h4>Total: ${total}</h4>
      <button onClick={limpiarCarrito}>limpiar carrito</button>
    </div>
  );
};
