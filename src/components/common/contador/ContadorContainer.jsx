import { useState } from "react";
import Contador from "./Contador";

const ContadorContainer = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    contador < stock ? setContador(contador + 1) : alert("No hay más stock");
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <Contador contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};

export default ContadorContainer;
