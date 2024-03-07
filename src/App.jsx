import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchAllProducts } from "./api";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const allProducts = await fetchAllProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error(error);
      }
    };
    getAllProducts();
  }, []);

  return (
    <>
      <div>
        <NavBar token={token} setToken={setToken} />
        <Routes>
          <Route path="/" element={<Products products={products} />} />
          <Route path="/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register setToken={setToken} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
