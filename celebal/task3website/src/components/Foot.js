import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';

export const Foot = () => {
  return (
    <>
      <footer className='footer1'>
        <div className="footer-container">
          <div className="column">
            <ShoppingCartOutlinedIcon/>
            <Link to="/Brand"><h4>Brand</h4></Link>
          </div>
          <div className="column">
            <PeopleAltOutlinedIcon/>
            <Link to="/AboutUs"><h4>About Us</h4></Link>
          </div>
          <div className="column">
            <HeadsetMicOutlinedIcon/>
            <Link to="/Contact"><h4>Contact Us</h4></Link>
          </div>
        </div>
        <div className='footer-copyright'>
          &#169; suniti 2023
        </div>
      </footer>
    </>
  );
};
