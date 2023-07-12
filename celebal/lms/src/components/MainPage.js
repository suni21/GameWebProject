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
      <Link className='explore' to="/Home">
      <button>Explore <div className='btn-arrow'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
          </div>
          </button></Link>
        <Link to="/Home"></Link>
      </div>
    </div>
  );
};
