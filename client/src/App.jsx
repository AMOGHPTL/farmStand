import { Routes, Route } from "react-router-dom";
import Products from "./pages/products";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default App;
