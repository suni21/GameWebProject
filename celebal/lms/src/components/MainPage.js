import '../css/mainpage.css';
import React from 'react';
import { Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <div className='mainpage'>
      <div className='title'>
        <h2>Learning Management System</h2>
      </div>
      <div className='btn-explore'>
        <Link className='explore' to='/MainPage'>
          <button>Explore</button>
        </Link>
      </div>
    </div>
  );
};
