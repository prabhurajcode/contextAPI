import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Guvi Store
        </Link>
        <Link to="/cart" className="btn btn-outline-success">
          Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
        </Link>
      </div>
    </nav>
  );
};

export default Header;
