import React from "react";
import ProductCardItem from "./ProductCardItem";
import CategoriesDropdown from "./CategoriesDropdown";

const Products = ({
  products,
  setProducts,
  cart,
  setCart,
  selectedOption,
  setSelectedOption,
}) => {
  const handleDecending = () => {
    const sortedProducts = [...products].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    setProducts(sortedProducts);
  };
  const handleAscending = () => {
    const sortedProducts = [...products].sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
    setProducts(sortedProducts);
  };

  return (
    <>
      <h1>Products</h1>
      <button onClick={handleDecending}>Low to High</button>
      <button onClick={handleAscending}>High to Low</button>
      <CategoriesDropdown
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
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
