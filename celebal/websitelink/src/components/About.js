import React from 'react'
import { Link } from 'react-router-dom';
import '../css/about.css';

export const About = () => {
  return (
  
    <div className='page-container'>
      <Link className='link-style2' to="/">Home</Link>
    <div className="about-us-container">
    <h2>About Us</h2>
    <p>
      Welcome to our makeup beauty product website! We are passionate about empowering individuals to enhance their natural beauty and express themselves through the art of makeup. Our mission is to provide high-quality beauty products that inspire confidence, creativity, and self-expression.
    </p>
    
    <p>
      We prioritize quality and sustainability in everything we do. Our products are meticulously crafted using premium ingredients and cruelty-free practices. We strive to minimize our environmental footprint by incorporating eco-friendly packaging and reducing waste throughout our supply chain.
    </p>
    <p>
      Customer satisfaction is at the heart of our business. We are committed to providing exceptional customer service and creating a seamless shopping experience. Our team of beauty experts is always ready to assist you with personalized recommendations, beauty tips, and any inquiries you may have.
    </p>
    <p>
      Thank you for choosing our makeup beauty product website. We are dedicated to helping you look and feel your best, and we look forward to being a part of your beauty journey.
    </p>
  </div>
  </div>
  
  )
}
