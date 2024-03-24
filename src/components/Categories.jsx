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
        />
      );
    }
  });
  return (
    <>
      <h1>{capatalized}</h1>
      <button onClick={handleDecending}>Low to High</button>
      <button onClick={handleAscending}>High to Low</button>
      <CategoriesDropdown
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div className="products">{filteredCategories}</div>{" "}
    </>
  );
};

export default Categories;
