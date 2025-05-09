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

  return (
    <div>
      {!loading && (
        <div>
          <h1>{product.name}!</h1>
          <p>name : {product.name}</p>
          <p>Price : {product.price}</p>
          <p>Category : {product.category}</p>
          <a href="/products">show all</a>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
