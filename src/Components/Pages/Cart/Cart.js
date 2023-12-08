import React, { useContext, useEffect } from "react";
import { MenuContext } from "../../../context/context";
import { PRODUCTS } from "../products";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

//entire cart
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(MenuContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  //automatically scroll to top of page 
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="cart">
      <div className="cartTitle">
        {totalAmount > 0 ? <h1>Your Cart Items</h1> : <></>}
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {parseFloat(totalAmount).toFixed(2) > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${parseFloat(totalAmount).toFixed(2)} </p>
          <button onClick={() => navigate("/menu")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/")
              alert("Thanks for Visiting! You just checked out!");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};