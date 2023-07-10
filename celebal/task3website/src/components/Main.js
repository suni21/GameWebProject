import React from 'react'
import '../css/main.css'
import liner from '../assets/liner.jpg';
import lipstick from '../assets/lipstick.png';
import mascra from '../assets/mascra.png';
import product1 from '../assets/shadow.png';
import brush from '../assets/brush.jpg';



export const Main = () => {
  return (
    <>
    <div className="main-container">
      <div className="main-head">
        <h2>
          Brands
        </h2>
      </div>
      <div className='img-container'>
      <img className='img-1' src={liner}/>
      <img className='img-2' src={lipstick}/>
      <img className='img-3' src={mascra}/>
      <img className='img-4' src={product1}/>
      <img className='img-5' src={brush}/>
    </div>
    </div>
    
    </>
  )
}
