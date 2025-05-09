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
      <h1>Welcome to Farm Stand</h1>
      <h2>Products:</h2>
      {!loading &&
        products.map((p) => (
          <div>
            <li>
              <a href={`/products/${p._id}`}>{p.name}</a>
            </li>
          </div>
        ))}
      <br />
      <a href="/products/new">Add Product</a>
    </div>
  );
};

export default Products;
