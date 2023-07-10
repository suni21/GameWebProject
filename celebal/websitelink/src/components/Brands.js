import React from 'react'
import '../css/brand.css';

import liner from '../assets/liner.jpg';
import lipstick from '../assets/lipstick.png';
import mascra from '../assets/mascra.png';
import product1 from '../assets/shadow.png';
import brush from '../assets/brush.jpg';
// import shadow from '..assets/shadow.png';


export const Brands = () => {
  return (
    
    <div className='product' >
      
      <div className="product-card">
        <img src={liner} className="product-image" />
        <h3 className="product-name">Eye Liner</h3>
        <div className="product-price">Rs {200}</div>
      </div>

      <div className="product-card">
        <img src={mascra} className="product-image" />
        <h3 className="product-name">Mascara</h3>
        <div className="product-price">Rs {100}</div>
      </div>

      <div className="product-card">
        <img src={lipstick} className="product-image" />
        <h3 className="product-name">Lipstick</h3>
        <div className="product-price">Rs {454}</div>
      </div>
      <div className="product-card">
        <img src={brush} className="product-image" />
        <h3 className="product-name">Brush</h3>
        <div className="product-price">Rs {260}</div>
      </div>
   
      <div className="product-card">
        <img src={product1} className="product-image" />
        <h3 className="product-name">Shadow Pallet</h3>
        <div className="product-price">Rs {120}</div>
      </div>
    </div>
  )
}
