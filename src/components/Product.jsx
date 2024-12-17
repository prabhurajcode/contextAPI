import { useContext } from "react";
import { CartContext } from "./Context";
import PropTypes from "prop-types";

const Product = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = () => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = () => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };

  const inCart = cart.find((item) => item.id === product.id);

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100">
        <img
          className="card-img-top"
          src={product.image}
          alt={product.title}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">$ {product.price}</p>

          {inCart ? (
            <button className="btn btn-danger" onClick={removeFromCart}>
              Remove from Cart
            </button>
          ) : (
            <button className="btn btn-primary" onClick={addToCart}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  };

export default Product;
