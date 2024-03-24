import React, { useEffect, useState } from "react";
import CartItemCard from "./CartItemCard";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  removeCartItem,
  editCartItemQuantity,
} from "../utils/helpers";

const Cart = ({ cart, products, setCart }) => {
  const [subTotal, setSubTotal] = useState(0);
  const navigate = useNavigate();

  const getAllItemDetails = (item) =>
    products.find((product) => product.id === item.productId);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleIncrement = (id) => {
    console.log(id);
    setCart((prevCart) => addToCart(prevCart, id));
  };

  const handleDecrement = (id) => {
    setCart((prevCart) => removeCartItem(prevCart, id));
  };

  const handleEditQuantity = (id, newQuantity) => {
    setCart((prevCart) => editCartItemQuantity(prevCart, id, newQuantity));
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const getTotalCart = () => {
      return cart.reduce((total, item) => {
        const product = products.find(
          (product) => product.id === item.productId
        );
        if (product) {
          return total + product.price * item.quantity;
        }
        return total;
      }, 0);
    };
    const total = getTotalCart;
    setSubTotal(total);
  }, [cart, products]);

  return (
    <div>
      <h1>Cart</h1>
      <p>Total Items: {totalItems}</p>
      {cart.map((item) => {
        const productItem = getAllItemDetails(item);

        return (
          productItem && (
            <CartItemCard
              productItem={productItem}
              key={item.productId}
              quantity={item.quantity}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onEdit={handleEditQuantity}
            />
          )
        );
      })}
      <p>Subtotal: {isNaN(subTotal) ? "$0.00" : `$${subTotal.toFixed(2)}`}</p>
      <button onClick={handleCheckout}>Proceed To Checkout</button>
    </div>
  );
};

export default Cart;
