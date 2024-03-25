import React from "react";
import "./cart.css";

const CartItemCard = ({
  productItem,
  quantity,
  onIncrement,
  onDecrement,
  onEdit,
}) => {
  const handleIncrement = () => {
    onIncrement(productItem.id);
  };

  const handleDecrement = () => {
    onDecrement(productItem.id);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = Number(event.target.value);
    onEdit(productItem.id, newQuantity);
  };

  return (
    <div>
      <div>
        <img
          src={productItem.image}
          alt={productItem.title}
          className="cart-img"
        />
      </div>
      <div className="cartContent">
        <h3>{productItem.title}</h3>
        <p className="cartFeature">Quantity: {quantity}</p>
        <select value={quantity} onChange={handleQuantityChange}>
          {[...Array(30).keys()].map((index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <p className="cartFeature">Price: {productItem.price}</p>
        <div className="cartButtons">
          <button onClick={handleIncrement} className="cartButton">
            +
          </button>
          <button onClick={handleDecrement} className="cartButton" id="minus">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
