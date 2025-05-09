import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(Number);
  const [category, setCategory] = useState("");

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const id = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      const product = await axios.get(
        `http://localhost:5000/products/${id.id}`
      );
      setProduct(product.data);
      setName(product.data.name);
      setPrice(product.data.price);
      setCategory(product.data.category);
      setLoading(false);
    };
    fetchProduct();
  }, []);

  const handleSubmit = async (e) => {
    console.log(name, price, category);
    const sumbit = await axios.put(
      `http://localhost:5000/products/${id.id}/edit`,
      {
        _id: id.id,
        name: name,
        price: price,
        category: category,
      }
    );
  };

  return (
    <div>
      {!loading && (
        <div>
          <h1>Edit Product:</h1>
          <form action={`/products/${id.id}`} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Product name"
            />
            <label htmlFor="price">Price</label>
            <input
              type="Number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="price"
            />
            <label htmlFor="category">Category</label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id=""
            >
              <option value=""> </option>
              <option value="fruit">fruit</option>
              <option value="vegetable">vegetable</option>
              <option value="dairy">dairy</option>
            </select>
            <button type="submit">Save</button>
          </form>
          <a href={`/products/${id.id}`}>Cancel</a>
        </div>
      )}
    </div>
  );
};

export default EditProduct;
