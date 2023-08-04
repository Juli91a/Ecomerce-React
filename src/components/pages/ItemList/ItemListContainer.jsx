import { useState, useEffect } from "react";
import { productos } from "../../../productos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState({});

  const { categorias } = useParams();

  useEffect(() => {
    let prodFiltrados = productos.filter(
      (elemento) => elemento.categoria === categorias
    );
    const producto = new Promise((resolve) => {
      resolve(categorias === undefined ? productos : prodFiltrados);
    });

    producto
      .then((respuesta) => setProducts(respuesta))
      .catch((error) => setError(error));
  }, [categorias]);
  console.log(error);
  return <ItemList products={products} />;
};

export default ItemListContainer;
