import TarjetaProducto from "../../common/tarjetaProducto/TarjetaProducto";

const ItemList = ({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {products.map((elemento) => {
        return <TarjetaProducto key={elemento.id} elemento={elemento} />;
      })}
    </div>
  );
};

export default ItemList;
