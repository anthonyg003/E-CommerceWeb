import React, { useEffect, useState } from "react";
import CartItemCard from "./CartItemCard";
import { useNavigate } from "react-router-dom";
import "./cart.css";
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
    <div className="cartContainer">
      <h1 className="title">Cart</h1>
      <div className="cartItem">
        {cart.map((item) => {
          const productItem = getAllItemDetails(item);

          return (
            productItem && (
              <div className="cartItemCard">
                <CartItemCard
                  productItem={productItem}
                  key={item.productId}
                  quantity={item.quantity}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                  onEdit={handleEditQuantity}
                />
              </div>
            )
          );
        })}
      </div>
      <div className="cartCheckout">
        <div className="cartCheckoutContent">
          <p className="totalItems">Total Items: {totalItems}</p>
          <p className="subtotal">
            Subtotal: {isNaN(subTotal) ? "$0.00" : `$${subTotal.toFixed(2)}`}
          </p>
          <button onClick={handleCheckout} className="checkOutButton">
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
