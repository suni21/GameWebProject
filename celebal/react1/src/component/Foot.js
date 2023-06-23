import React from 'react'
import '../css/footer.css';
import image22 from '../assets/group23.png';
import image23 from '../assets/group24.png';
import image24 from '../assets/group25.png';
import image25 from '../assets/group26.png';

export const Foot = () => {
    return (
        <>
            <footer className='footer1'>
                <div className="footer-container">
                    <div className="column">
                        <h4>Solutio et Services</h4>
                        <ul>
                            <li>Software development</li>
                            <li>Outsourcing</li>
                            <li>Qualitas et processus Management</li>
                            <li>Consilium</li>
                            <li>IoT Supported Solutions</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Products</h4>
                        <ul>
                            <li>Education Management System</li>
                            <li>Humanum Capital Systema Management</li>
                            <li>Lorem relatione Management System</li>
                            <li>Contenta Ratio Management</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Institutionum</h4>
                        <ul>
                            <li>De nobis</li>
                            <li>Documenta et Competencies</li>
                            <li>Opus sociis</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h4>Communicationis</h4>
                        <ul>
                            <li>Forma Information Request</li>
                            <li>Forma Request Peritus</li>
                        </ul>
                        <div>
                       
                        <div className='footer-img'>
                            <img src={image22} />
                            <img src={image23} />
                            <img src={image24} />
                            <img src={image25} />
                        </div>
                    </div>
                    </div>
                    <div className='footer-copyright'> &#169; Copyright 2023-2024
                        </div>
                   
                </div>
            </footer>
        </>
    )
}
