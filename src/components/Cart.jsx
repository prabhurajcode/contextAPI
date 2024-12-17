import { useContext } from "react";
import { CartContext } from "./Context";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mt-5 pt-5">
      <h3>Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center mb-3"
            >
              <div>
                <img
                  className="card-img-top"
                  src={item.image}
                  alt={item.title}
                  style={{ height: "100px", objectFit: "contain" }}
                />
                <h5>{item.title}</h5>
                <p>$ {item.price.toFixed(2)}</p>
              </div>
              <div>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="mx-3">{item.quantity}</span>
                <button
                  className="btn btn-outline-success"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <h4>Total: $ {total.toFixed(2)}</h4>
        </>
      )}
    </div>
  );
};

export default Cart;
