import { products } from "../products.json";
import Product from "./Product";

const Home = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
