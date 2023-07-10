import React from 'react'
import '../css/contact.css'
import { Link } from 'react-router-dom';
export const Contact = () => {
  return (
    <>
     <Link className='link-style2' to="/">Home</Link>
     <div className='contact-container'>
      <h2>Contact Us</h2>
      <p>
        We would love to hear from you! If you have any questions, feedback, or inquiries, please feel free to get in touch with us using the contact details below.
      </p>
      <div className="contact-details">
        <p>Email: kumarisuniti@gmail.com</p>
        <p>Phone: xxxxxxxxxx</p>
        <p>Address: 1234 Street, City, Country</p>
      </div>
    </div>
    </>
   
  )
}
