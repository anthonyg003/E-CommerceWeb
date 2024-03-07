import React from "react";
import "./productCard.css";
import { useNavigate } from "react-router-dom";

const ProductCardItem = ({ product, isSingleProduct }) => {
  const navigate = useNavigate();
  const handleSingleView = () => {
    navigate(`${product.id}`);
  };
  return (
    <>
      <div>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.price}</p>
        {!isSingleProduct && (
          <button onClick={handleSingleView}>View Item</button>
        )}
      </div>
    </>
  );
};

export default ProductCardItem;
