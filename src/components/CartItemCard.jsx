import React from "react";
import "./cart.css";

const CartItemCard = ({ productItem, quantity }) => {
  return (
    <div>
      <div>
        <img
          src={productItem.image}
          alt={productItem.title}
          className="cart-img"
        />
      </div>
      <div>
        <h3>{productItem.title}</h3>
        <p>Quantity: {quantity}</p>
        <p>Price: {productItem.price}</p>
      </div>
    </div>
  );
};

export default CartItemCard;
