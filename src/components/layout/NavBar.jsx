import Carrito from "../common/carrito/carrito";

const NavBar = () => {
  return (
    <div style={{ backgroundColor: "#D4B16A", display: "flex" }}>
      <a href="#">
        <img
          className="Logo"
          src="./src/components/assets/img/logo.png"
          alt=""
          style={{ width: "50px" }}
        />
      </a>
      <ul
        style={{
          listStyle: "none",
        }}
      >
        <li>
          <a style={{ textDecoration: "none" }} href="#">
            Remeras
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none" }} href="#">
            Patalones
          </a>
        </li>
        <li>
          <a style={{ textDecoration: "none" }} href="#">
            Buzos
          </a>
        </li>
      </ul>
      <Carrito />
    </div>
  );
};

export default NavBar;
