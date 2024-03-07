import React from "react";
import ProductCardItem from "./ProductCardItem";
const Products = ({ products }) => {
  return (
    <>
      <div>
        <h1>Products</h1>
        {products &&
          products.map((product) => {
            return <ProductCardItem key={product.id} product={product} />;
          })}
      </div>
    </>
  );
};

export default Products;
