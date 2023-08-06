import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../FirebaseConfig";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categorias } = useParams();

  useEffect(() => {
    let coleccionProductos = collection(db, "productos");

    let consulta;
    if (categorias) {
      consulta = query(
        coleccionProductos,
        where("categoria", "==", categorias)
      );
    } else {
      consulta = coleccionProductos;
    }

    getDocs(consulta).then((res) => {
      let productos = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setProducts(productos);
    });
  }, [categorias]);
  return <ItemList products={products} />;
};

export default ItemListContainer;
