import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ContadorContainer from "../../common/contador/ContadorContainer";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../../FirebaseConfig";
import { collection, getDoc, doc } from "firebase/firestore";

export const DetalleProductoContainer = () => {
  const { agregarCarrito, elementoCarrito } = useContext(CarritoContext);
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  const cantidadTotal = elementoCarrito(id);
  useEffect(() => {
    let productosColeccion = collection(db, "productos");
    let productoElegido = doc(productosColeccion, id);
    getDoc(productoElegido).then((res) => {
      setProducto({ ...res.data(), id: res.id });
    });
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

      {producto.stock < 1 ? (
        <h3>Sin Stock</h3>
      ) : (
        <ContadorContainer
          stock={producto.stock}
          onAdd={onAdd}
          inicial={cantidadTotal}
        />
      )}
    </div>
  );
};
