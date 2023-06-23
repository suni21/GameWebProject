import React from 'react'
import '../css/body1.css';

import image1 from '../assets/group12.png';
import image2 from '../assets/group13.png';
import image3 from '../assets/group14.png';
import image4 from '../assets/group15.png';
import image5 from '../assets/group16.png';
import image6 from '../assets/group17.png';
import image7 from '../assets/group18.png';

import image22 from '../assets/group22.png'
import image23 from '../assets/person1.png';
import image24 from '../assets/person2.png';
import logos from '../assets/logos.png';
// import image7 from '../assets/group18.png';

export const Body1 = () => {
  return (
    <>
      <div className="body1">
        <h2>Lorem ipsum dolor sit ame</h2>
        <div className="box-container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className="box-item-content">
          <div className="box-image">
            <img src={image1} />
            <div className='box-item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
          <div className="box-image">
            <img src={image2} />
            <div className='box-item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

          </div>
          <div className="box-image">
            <img src={image3} />
            <div className='box-item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

          </div>
          <div className="box-image">
            <img src={image4} />
            <div className='box-item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
          <div className="box-image"><img src={image5} />
            <div className='box-item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

          </div>
          <div className="box-image"><img src={image6} />
            <div className='box-item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

          </div>
        </div>
      </div>
      {/* Body2 */}
      <div className="body2" >
        <div className='box-title'>
          <h2>Lorem ipsum dolor sit amet, consectetur </h2>
        </div>
        <div className="box-container2">
          <div className="box-body">
            Lorem ipsum dolor
          </div>
          <img src={image22} />
          <div className="box-body">
            Lorem ipsum dolor
          </div>
          <img src={image22} />
          <div className="box-body">
            Lorem ipsum dolor
          </div>
          <img src={image22} />
          <div className="box-body">
            Lorem ipsum dolor
          </div>

        </div>
      </div>
      {/* Body2 end */}

      {/* Body3 start */}
      <div className='body3'>
        <div className='body3-box-title'>
          <h2>Lorem ipsum dolor sit amet, consectetur </h2>

          <div className='box-content-body'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <div >
              <button className='body3-btn'>
                Discover
              </button>
            </div>
          </div>


        </div>
        <div className='body3-img'>
          <img src={image23} />
        </div>

      </div>
      <div className='body3-pic'>
        <div className='body3-img1'>
          <img src={image24} alt='Image' />

          <div className='body3-box-title'>
            <h2>Lorem ipsum dolor sit amet, consectetur</h2>
            <div className='box-content-body'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div >
              <button className='body3-btn'>
                Discover
              </button>
            </div>
          </div>
        </div>

        {/* Body3 end */}
        {/* Body4 start */}
      </div>
      <div className='body4'>
        <div className='body4-title'>
          <h2>Nostra references</h2>
        </div>
        <div className='body4-body'>
          Negotium nostrum socii qui nobis confidunt et nobiscum laborant
        </div>

        <div className='body4-img'>
          <img src={logos} />
        </div>
      </div>
      {/* Body4 end */}

      <div className='body5'>
        <div className='body5-img'>
          <img src={image7} />
        </div>
        <div className='body5-header'>
          <h2>Nobis loquere</h2>
        </div>
        <div className='body5-body'>
          Contactus nos ad melius informationes de nostris solutionibus, servitiis et fructibus.
        </div>
<div className='btn-btn5' >
  <button className='body5-btn'>
  Nobis loquere
  </button>
</div>
      </div>

    </>

  )
}
