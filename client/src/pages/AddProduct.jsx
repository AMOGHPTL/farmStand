import axios from "axios";
import { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(Number);
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, price, category);
    const sumbit = await axios.post("http://localhost:5000/products/new", {
      name: name,
      price: price,
      category: category,
    });
  };

  return (
    <div>
      <h1>Add product:</h1>
      <form action="/products" onSubmit={handleSubmit}>
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
          <option value="fruit">fruit</option>
          <option value="vegetable">vegetable</option>
          <option value="dairy">dairy</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
