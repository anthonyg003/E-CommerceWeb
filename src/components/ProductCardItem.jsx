import React from "react";
import "./productCard.css";
import "./singleProduct.css";
import { useNavigate, Link } from "react-router-dom";

const ProductCardItem = ({ product, isSingleProduct, cart, setCart }) => {
  // const navigate = useNavigate();
  // const handleSingleView = () => {
  //   navigate(`${product.id}`);
  // };

  const handleAddToCart = () => {
    const productId = product.id;
    const existingCartItem = cart.findIndex(
      (item) => item.productId === productId
    );
    if (existingCartItem !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingCartItem].quantity += 1;
      setCart(updatedCart);
      console.log("cart --->", cart);
    } else {
      const newItem = { productId, quantity: 1 };
      setCart((prevCart) => [...prevCart, newItem]);
      console.log("cart --->", cart);
    }
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

      {/* <Link to={`/${product.id}`}>
          <img src={product.image} alt={product.title} />
        </Link>
        <Link to={`/${product.id}`}>
          <p className="product-title">{product.title}</p>
        </Link>
        <p className="price">{product.price}</p>
        <button className="card button" onClick={handleAddToCart}>
          Add To Cart
        </button> */}
      {/* {!isSingleProduct && (
          <button onClick={handleSingleView}>View Item</button>
        )} */}
      {/* </div> */}
    </div>
  );
};

export default ProductCardItem;
