import React from "react";
import "./productCard.css";
import "./singleProduct.css";
import { Link } from "react-router-dom";
import { addToCart } from "../utils/helpers";

const ProductCardItem = ({ product, isSingleProduct, cart, setCart }) => {
  const handleAddToCart = () => {
    const productId = product.id;
    setCart((prevCart) => addToCart(prevCart, productId));
  };

  return (
    <div>
      {isSingleProduct ? (
        <>
          <div className="single-card">
            <img
              src={product.image}
              alt={product.title}
              className="single-img"
            />
            <h1 className="product-title">{product.title}</h1>
            <p className="price">{product.price}</p>
            <p>{product.description}</p>
            <button className="cardButton" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="cards">
            <Link to={`/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="products-img"
              />
            </Link>
            <Link to={`/${product.id}`}>
              <p className="products-title">{product.title}</p>
            </Link>
            <p className="prices">{product.price}</p>
            <button className="cardButtons" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCardItem;
