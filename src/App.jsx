import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchAllProducts } from "./api";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Order from "./components/Order";
import Categories from "./components/Categories";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart" || []))
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user" || null))
  );
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      const userObj = JSON.stringify(user);
      localStorage.setItem("user", userObj);
      const cartObj = JSON.stringify(cart);
      localStorage.setItem("cart", cartObj);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
    }
  }, [token, cart, user]);

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
          <Route
            path="/"
            element={
              <Products
                setProducts={setProducts}
                products={products}
                cart={cart}
                setCart={setCart}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                token={token}
              />
            }
          />
          <Route
            path="/:id"
            element={
              <SingleProduct cart={cart} setCart={setCart} token={token} />
            }
          />
          <Route
            path="/login"
            element={
              <Login setToken={setToken} setUser={setUser} setCart={setCart} />
            }
          />
          {/* <Route path="/register" element={<Register setToken={setToken} />} /> */}
          <Route
            path="/cart"
            element={<Cart cart={cart} products={products} setCart={setCart} />}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
          <Route
            path="/categories/:category"
            element={
              <Categories
                products={products}
                setProducts={setProducts}
                setCart={setCart}
                cart={cart}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                token={token}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
