import { BsFillCartCheckFill } from "react-icons/bs";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

const Carrito = () => {
  return (
    <Link to="/ItemsCarrito" style={{ paddingTop: "10px" }}>
      <Badge
        badgeContent={4}
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
