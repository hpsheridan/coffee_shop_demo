import { React, useEffect } from 'react';
import './Menu.css'
import '../../App.js';
import { PRODUCTS } from './products.js';
import { Product } from './Product.js';

//Menu Page
function Menu() {

  //automatically scroll to top of page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className='menu-container'>
      <div className='MenuTitle'>
        <h1>Menu</h1>
      </div>
      <div className='products'> {PRODUCTS.map((product) =>
        (<Product data={product} />))}
      </div>
    </div>
  )
}

export default Menu
