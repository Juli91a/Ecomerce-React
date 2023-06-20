const ItemList = ({ cambiarSaludar, saludar, usuario }) => {
  return (
    <div style={{ backgroundColor: "#FCDFA5" }}>
      <container>
        <h1>
          {usuario}
          {saludar}
        </h1>
        <button onClick={() => cambiarSaludar("A nombre marca ")}>Marca</button>
      </container>
    </div>
  );
};

export default ItemList;
