import React from "react";
import { NewProducts } from "../../Data/NewProducts";
import Card from "../Card/Card";
import "./New.css";

const New = () => {
  return (
    <div className="new">
      <div className="new-items">
        {NewProducts.map((product, i) => {
          return (
            <Card
              className="all-card"
              key={i}
              id={product.id}
              title={product.title}
              images={product.images}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default New;
