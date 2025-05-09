import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const id = useParams();
  console.log(id);

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      const product = await axios.get(
        `http://localhost:5000/products/${id.id}`
      );
      setProduct(product.data);
      setLoading(false);
    };
    fetchProduct();
  }, []);

  const handleDelete = async (e) => {
    const deletedProduct = await axios.delete(
      `http://localhost:5000/products/${id.id}/delete`
    );
  };

  return (
    <div>
      {!loading && (
        <div>
          <h1>{product.name}!</h1>
          <p>name : {product.name}</p>
          <p>Price : {product.price}</p>
          <p>Category : {product.category}</p>
          <a href={`/products/${product._id}/edit`}>Edit</a>
          <br />
          <a href="/products">show all</a>
          <form action="/products" onSubmit={handleDelete}>
            <button type="submit">DELETE</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
