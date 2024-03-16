import React from "react";

const CartItemCard = ({ productItem, quantity }) => {
  return (
    <div>
      <div>
        <h1>cart item</h1>
        <img src={productItem.image} alt={productItem.title} />
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
