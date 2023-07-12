import Carrito from "../../common/carrito/carrito";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="contenedorNav">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dkkqrsod5/image/upload/v1689131278/logo_yq2cug.png"
          alt=""
          style={{ width: "50px" }}
        />
      </Link>
      <ul className="links">
        <Link to="/">Todos</Link>
        <Link to="/category/Pantalones">Pantalones</Link>
        <Link to="/category/Remeras">Remeras</Link>
        <Link to="/category/Buzos">Buzos</Link>
      </ul>
      <Carrito />
    </div>
  );
};

export default NavBar;
