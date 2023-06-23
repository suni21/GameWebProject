import React from 'react'
import '../css/nav.css'

export const Navigation = () => {
  return (
    <>
      <nav>
        <div className='nav-container'>
          <div className='nav-section'>
            <ul >
              <li>Solution and Services</li>
              <li>Products</li>
              <li>Technologies</li>
              <li>Human Resources</li>
              <li>Institutional</li>
              <li><button className='nav-btn'>
                Submit
              </button></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
