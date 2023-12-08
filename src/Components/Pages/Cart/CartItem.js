import React, { useContext } from "react";
import { MenuContext } from "../../../context/context";
import "./Cart.css";

// individual cart item
export const CartItem = (props) => {
    const { id, productName, price, description, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
        useContext(MenuContext);

    return (
        <div className="cartItem">
            <img src={productImage} />
            <div className="description">
                <p>
                    <b className="productName">{productName}</b>
                </p>
                <p> {description}</p>
                <p> ${parseFloat(price).toFixed(2)}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input id="input-btn"
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    );
};