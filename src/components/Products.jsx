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
  token,
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
      <div className="productsContainer">
        <h1 className="title">Products</h1>
        <div className="sort">
          <h3>Sort By</h3>
          <button onClick={handleDecending} className="sortButton">
            Low to High
          </button>
          <button onClick={handleAscending} className="sortButton">
            High to Low
          </button>
        </div>
        <div className="dropdown">
          <CategoriesDropdown
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
        <div className="products">
          {products.map((product) => {
            return (
              <ProductCardItem
                key={product.id}
                product={product}
                cart={cart}
                setCart={setCart}
                token={token}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
