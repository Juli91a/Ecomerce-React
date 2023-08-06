import { useContext, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../../FirebaseConfig";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { Link } from "react-router-dom";

const CheckoutContainer = () => {
  const { carrito, precioTotal } = useContext(CarritoContext);
  const [idOrden, setIdorden] = useState("");

  let total = precioTotal();
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
  });
  let orden = {
    comprador: data,
    productos: carrito,
    total,
    date: serverTimestamp(),
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    const coleccionOrden = collection(db, "ordenes");
    addDoc(coleccionOrden, orden).then((res) => setIdorden(res.id));
    carrito.forEach((producto) => {
      updateDoc(doc(db, "productos", producto.id), {
        stock: producto.stock - producto.cantidad,
      });
    });
  };

  const handleChange = (evento) => {
    setData({ ...data, [evento.target.name]: evento.target.value });
  };
  return (
    <div>
      <h1>Checkout</h1>

      {idOrden ? (
        <div
          style={{
            padding: "5px",
          }}
        >
          <h4>Resumen de compra</h4>

          <h3>Total: {total}</h3>
          <h3>Gracias {data.nombre} por tu compra</h3>
          <h3>Tu numero de seguimiento es: {idOrden} </h3>
          <Link
            to="/"
            style={{
              margin: "10px 0",
              padding: "2px",
              textDecoration: "none",
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              border: "1px solid black",
              borderRadius: "5px",
              color: "black",
              display: "block",
              maxWidth: "max-content",
              fontSize: "20px",
            }}
          >
            Seguir comprando
          </Link>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit} style={{ padding: "10px" }}>
            <input
              type="text"
              placeholder="Ingrese su nombre"
              name="nombre"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Ingrese su apellido"
              name="apellido"
              onChange={handleChange}
            />
            <input
              type="tel"
              placeholder="Celular"
              name="telefono"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Ingrese su email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Repetir email"
              name="repetirEmail"
              onChange={handleChange}
            />
            <button type="submit">Comprar</button>
          </form>
          <h3>Detalle de compra: </h3>
          {carrito.map((producto) => (
            <div
              key={producto.id}
              style={{
                border: "1px solid black",
                maxWidth: "max-content",
                padding: "5px",
              }}
            >
              <h3>Producto: {producto.titulo}</h3>
              <h3>Cantidad: {producto.cantidad}</h3>
              <h3>Precio unitario: {producto.precio}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CheckoutContainer;
