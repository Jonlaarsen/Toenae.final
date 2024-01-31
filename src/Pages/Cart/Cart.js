import React, { useContext } from "react";
import AllProducts from "../../Data/AllProducts";
import "./Cart.css";

import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import CartItems from "../../components/CartItems/CartItems";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const navigate = useNavigate();
  return (
    <div className="cart-container">
      <div className="cart">
        {AllProducts.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <h1>CHECKOUT</h1>
          <p>
            subtotal: $ <span>{totalAmount}</span>
          </p>
          <button
            onClick={() => navigate("/") && scrollToTop()}
            className="continue-btn"
          >
            Continue Shopping
          </button>
          <button className="checkout-btn">Checkout</button>
        </div>
      ) : (
        <h1>YOUR CART IS EMPTY</h1>
      )}
    </div>
  );
};

export default Cart;
