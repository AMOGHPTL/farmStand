import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const products = await axios.get(
        `http://localhost:5000/products?category=${category}`
      );
      setProducts(products.data);
      console.log("fetching complete");
      setLoading(false);
    };
    fetchProducts();
  }, [category]);

  return (
    <div>
      <h1>Welcome to Farm Stand</h1>
      <button onClick={() => setCategory("")}>All</button>
      <button onClick={() => setCategory("fruit")}>fruit</button>
      <button onClick={() => setCategory("vegetable")}>vegetable</button>
      <button onClick={() => setCategory("dairy")}>dairy</button>
      <h2>{category} Products:</h2>
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
