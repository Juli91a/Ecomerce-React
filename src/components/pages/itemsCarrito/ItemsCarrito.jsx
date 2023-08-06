import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

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
            <button
              onClick={() => eliminarProducto(producto.id)}
              style={{
                textDecoration: "none",
                fontFamily: "Georgia, 'Times New Roman', Times, serif",
                border: "1px solid black",
                borderRadius: "5px",
                color: "black",
                backgroundColor: "transparent",
                padding: "2px",
              }}
            >
              Eliminar producto
            </button>
          </div>
        );
      })}
      <h4>Total: ${total}</h4>
      <div
        style={{
          display: "flex",
          maxWidth: "50%",
        }}
      >
        <Link
          to="/ChekOut"
          style={{
            padding: "2px",
            textDecoration: "none",
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
            border: "1px solid black",
            borderRadius: "5px",
            color: "black",
            marginRight: "20%",
            marginLeft: "2px",
          }}
        >
          Finalizar compra
        </Link>
        <button
          onClick={limpiarCarrito}
          style={{
            padding: "2px",
            textDecoration: "none",
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
            border: "1px solid black",
            borderRadius: "5px",
            color: "black",
            backgroundColor: "transparent",
          }}
        >
          Limpiar carrito
        </button>
      </div>
    </div>
  );
};
