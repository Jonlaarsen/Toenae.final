import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = (props) => {
  const product = props.data;
  console.log(props.data);
  console.log(product);

  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  if (!product) return null;

  return (
    <div className="cart-items-container">
      <div className="main">
        <p>PRODUCT</p>
        <p>TITLE</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>TOTAL</p>
      </div>
      <hr />
      <div className="cart-items">
        <img src={product.images} alt="" />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <div className="quantity">
          <button onClick={() => removeFromCart(product.id)}>-</button>
          <input value={cartItems[product.id]} />
          <button onClick={() => addToCart(product.id)}>+</button>
        </div>
        <p>${product.price * cartItems[product.id].toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItems;
