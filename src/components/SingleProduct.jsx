import React, { useState, useEffect } from "react";
import { fetchSingleProduct } from "../api";
import { useParams } from "react-router-dom";
import ProductCardItem from "./ProductCardItem";

const SingleProduct = ({ cart, setCart }) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getSingleProduct = async () => {
      const singleProduct = await fetchSingleProduct(id);
      setProduct(singleProduct);
    };
    getSingleProduct();
  }, [id]);

  if (!product) {
    return <h1>Loading ...</h1>;
  }

  return (
    <ProductCardItem
      product={product}
      isSingleProduct
      cart={cart}
      setCart={setCart}
    />
  );
};

export default SingleProduct;
