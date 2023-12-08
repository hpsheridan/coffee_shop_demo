import React, { useContext } from 'react'; 
import './Menu'; 
import './Menu.css';
import { MenuContext } from '../../context/context';

//handle adding products to the cart (cart is context shared throughout project)
export const Product = (props) => {
  const {id, productName, description, price} = props.data; 
  const {addToCart, cartItems} = useContext(MenuContext); 

  const cartItemCount = cartItems[id];

  return (
    <div className = "product-container">
      <div className='product-tab'>
        <p className='productName'><b>{productName}</b></p>
        <p className='description'>{description}</p>
        <p className='productPrice'>${parseFloat(price).toFixed(2)}</p>
      </div>
      <button className="addToCartButton" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  ); 
}; 


