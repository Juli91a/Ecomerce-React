import { BsFillCartCheckFill } from "react-icons/bs";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const Carrito = () => {
  let { produTotal } = useContext(CarritoContext);
  let total = produTotal();
  return (
    <Link to="/ItemsCarrito" style={{ paddingTop: "10px" }}>
      <Badge
        badgeContent={total}
        showZero
        color="primary"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <BsFillCartCheckFill color="#3C3175" size="30px" />
      </Badge>
    </Link>
  );
};

export default Carrito;
