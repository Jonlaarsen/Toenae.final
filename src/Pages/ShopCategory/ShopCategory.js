import React from "react";
import "./ShopCategory.css";

import Card from "../../components/Card/Card";
import AllProducts from "../../Data/AllProducts";
import { Link } from "react-router-dom";

const ShopCategory = (props) => {
  //   const { Allproducts } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <h1>{props.category}</h1>

      <div className="category-items">
        {AllProducts.map((product, i) => {
          if (props.category === product.category) {
            return (
              <a href={product.link}>
                <Card
                  key={i}
                  id={product.id}
                  title={product.title}
                  images={product.images}
                />
              </a>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
