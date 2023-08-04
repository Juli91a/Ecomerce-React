import { Link } from "react-router-dom";
import "./TarjetaProducto.css";
const TarjetaProducto = ({ elemento }) => {
  return (
    <div className="contenedor">
      <img src={elemento.img} alt="" />
      <h3>{elemento.titulo} </h3>
      <h4>{elemento.descripcion} </h4>
      <Link to={`/detalleProducto/${elemento.id}`}>
        <button>Detalles</button>
      </Link>
    </div>
  );
};

export default TarjetaProducto;
