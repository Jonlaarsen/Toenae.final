import React from "react";
import { useParams } from "react-router-dom";
import AllProducts from "../../Data/AllProducts";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import Description from "../../components/Description/Description";
import "./SingelProduct.css";

const SingelProductPage = () => {
  const { productId } = useParams();
  const product = AllProducts.find((e) => e.id === Number(productId));

  return (
    <div className="product-container">
      <ProductDisplay product={product} />
      {/* <Description /> */}
    </div>
  );
};

export default SingelProductPage;
