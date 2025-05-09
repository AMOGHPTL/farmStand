import { Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/new" element={<AddProduct />} />
      </Routes>
    </div>
  );
};

export default App;
