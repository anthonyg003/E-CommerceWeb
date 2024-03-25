import React from "react";
import { useParams } from "react-router-dom";
import ProductCardItem from "./ProductCardItem";
import CategoriesDropdown from "./CategoriesDropdown";
import "./productCard.css";

const Categories = ({
  products,
  setProducts,
  setCart,
  cart,
  selectedOption,
  setSelectedOption,
  token,
}) => {
  const { category } = useParams();

  const title = selectedOption;

  const capatalized = title.charAt(0).toUpperCase() + title.slice(1);

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

  const filteredCategories = products.map((product) => {
    if (product.category === category) {
      return (
        <ProductCardItem
          key={product.id}
          product={product}
          setCart={setCart}
          cart={cart}
          token={token}
        />
      );
    }
  });
  return (
    <>
      <h1 className="title">{capatalized}</h1>
      <div className="sort">
        <h3>Sort By </h3>
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
      <div className="products">{filteredCategories}</div>{" "}
    </>
  );
};

export default Categories;
