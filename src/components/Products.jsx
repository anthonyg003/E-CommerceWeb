import React from "react";
import ProductCardItem from "./ProductCardItem";
const Products = ({ products, cart, setCart }) => {
  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => {
          return (
            <ProductCardItem
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
