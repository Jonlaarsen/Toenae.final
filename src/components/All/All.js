import "./All.css";

import Card from "../Card/Card";
import AllProducts from "../../Data/AllProducts";

const All = () => {
  return (
    <div className="all">
      <h1>ALL</h1>
      <hr></hr>
      <div className="all-item">
        {AllProducts.map((product, i) => {
          return (
            <Card
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

export default All;
