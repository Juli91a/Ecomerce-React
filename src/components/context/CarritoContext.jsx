import { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (productoAgregado) => {
    const existe = existencia(productoAgregado.id);

    if (existe) {
      let nuevoCarrito = carrito.map((elemento) => {
        if (elemento.id === productoAgregado.id) {
          return {
            ...elemento,
            cantidad: productoAgregado.cantidad,
          };
        } else {
          return elemento;
        }
      });

      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, productoAgregado]);
    }
  };
  const limpiarCarrito = () => {
    setCarrito([]);
  };
  const eliminarProducto = (id) => {
    let carr = carrito.filter((elemento) => elemento.id !== id);
    setCarrito(carr);
  };

  const existencia = (id) => {
    let existe = carrito.some((elemento) => elemento.id === id);
    return existe;
  };

  const precioTotal = () => {
    let total = carrito.reduce((acc, elemento) => {
      return acc + elemento.precio * elemento.cantidad;
    }, 0);
    return total;
  };

  const produTotal = () => {
    let total = carrito.reduce((acc, elemento) => {
      return acc + elemento.cantidad;
    }, 0);
    return total;
  };

  const elementoCarrito = (id) => {
    const productoCarrito = carrito.find((elemento) => elemento.id === +id);
    return productoCarrito?.cantidad;
  };

  let info = {
    carrito,
    agregarCarrito,
    limpiarCarrito,
    eliminarProducto,
    precioTotal,
    produTotal,
    elementoCarrito,
  };
  return (
    <CarritoContext.Provider value={info}>{children}</CarritoContext.Provider>
  );
};

export default CarritoProvider;
