const Contador = ({ contador, sumar, restar, onAdd }) => {
  return (
    <div>
      <button onClick={sumar}>+</button>
      <h3>{contador}</h3>
      <button onClick={restar}>-</button>
      <button
        style={{ display: "block", margin: "auto" }}
        onClick={() => onAdd(contador)}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Contador;
