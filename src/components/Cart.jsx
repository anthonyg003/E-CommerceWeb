import React from "react";
import CartItemCard from "./CartItemCard";

const Cart = ({ cart, products, setCart }) => {
  const getAllItemDetails = (item) =>
    products.find((product) => product.id === item.productId);

  console.log("cart -->", cart);
  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => {
        const productItem = getAllItemDetails(item);

        return (
          productItem && (
            <CartItemCard
              key={productItem.id}
              productItem={productItem}
              quantity={item.quantity}
            />
          )
        );
      })}
    </div>
  );
};

export default Cart;
