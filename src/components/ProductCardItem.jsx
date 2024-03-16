import React from "react";
import "./productCard.css";
import { useNavigate } from "react-router-dom";

const ProductCardItem = ({ product, isSingleProduct, cart, setCart }) => {
  const navigate = useNavigate();
  const handleSingleView = () => {
    navigate(`${product.id}`);
  };
  // console.log("product --> ", product);
  const handleAddToCart = () => {
    const productId = product.id;
    const existingCartItem = cart.findIndex(
      (item) => item.productId === productId
    );
    if (existingCartItem !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingCartItem].quantity += 1;
      setCart(updatedCart);
      console.log("cart --->", cart);
    } else {
      const newItem = { productId, quantity: 1 };
      setCart((prevCart) => [...prevCart, newItem]);
      console.log("cart --->", cart);
    }
  };
  return (
    <>
      <div>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.price}</p>
        <button onClick={handleAddToCart}>Add To Cart</button>
        {!isSingleProduct && (
          <button onClick={handleSingleView}>View Item</button>
        )}
      </div>
    </>
  );
};

export default ProductCardItem;
