import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const products = await axios.get("http://localhost:5000/products");
      setProducts(products.data);
      console.log("fetching complete");
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>This is Products Page</h1>
      <h2>Products:</h2>
      {!loading &&
        products.map((p) => (
          <div>
            <p>{p.name}</p>
            <a href={`/products/${p._id}`}>Details</a>
          </div>
        ))}
    </div>
  );
};

export default Products;
