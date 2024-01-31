import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[product.id];

  return (
    <div className="product-display">
      <div className="product-left">
        <div className="image-list">
          {/* <img src={product.images} alt="" />
          <img src={product.images} alt="" />
          <img src={product.images} alt="" />
          <img src={product.images} alt="" /> */}
        </div>
        <div className="product-img">
          <img className="main-img" src={product.images} alt="" />
        </div>
      </div>
      <div className="product-right">
        <h1>{product.title}</h1>
        <p className="price"> ${product.price}</p>
        <p className="product-desc">{product.desc}</p>

        <div className="product-size">
          <h1>SELECT SIZE</h1>
          <div className="sizes">
            <label for="size">Choose a size:</label>
            <select required id="size" name="size">
              <option value="x-small">XS</option>
              <option value="small">S</option>
              <option value="medium">M</option>
              <option value="large">L</option>
            </select>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
        </button>
        <p className="product-category">
          <span>Category :</span> {product.category}
        </p>
        {/* <div className="product-sizes">
            {product.sizes.map((e) => {
              return <p>{e}</p>;
            })}
          </div> */}
      </div>
    </div>
  );
};

export default ProductDisplay;
