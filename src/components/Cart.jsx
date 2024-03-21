import React from "react";
import CartItemCard from "./CartItemCard";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  removeCartItem,
  editCartItemQuantity,
} from "../utils/helpers";

const Cart = ({ cart, products, setCart }) => {
  const navigate = useNavigate();

  const getAllItemDetails = (item) =>
    products.find((product) => product.id === item.productId);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  console.log("cart -->", cart);

  const handleIncrement = (id) => {
    //TODO
    setCart((prevCart) => addToCart(prevCart, id));
  };

  const handleDecrement = (id) => {
    //TODO
    setCart((prevCart) => removeCartItem(prevCart, id));
  };

  const handleEditQuantity = (id, newQuantity) => {
    //TODO
    setCart((prevCart) => editCartItemQuantity(prevCart, id, newQuantity));
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => {
        const productItem = getAllItemDetails(item);

        return (
          productItem && (
            <CartItemCard
              productItem={productItem}
              key={productItem.id}
              quantity={item.quantity}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onEdit={handleEditQuantity}
            />
          )
        );
      })}
      <button onClick={handleCheckout}>Proceed To Checkout</button>
    </div>
  );
};

export default Cart;
