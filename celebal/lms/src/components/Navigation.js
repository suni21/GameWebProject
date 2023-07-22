import React from 'react'
import { Link } from 'react-router-dom';
import '../css/navigation.css';

export const Navigation = () => {
    return (
        <nav>
            <div className='nav-container'>
                <div className='nav-section'>
            <ul>
                {/* <li>
                    <Link className='nav-style' to="/MainPage">Home
                    </Link>
                </li> */}
                <li>
                    <Link className='nav-style' to="/Home">Course
                    </Link>
                </li>
                {/* <li>
                    <Link className='nav-style' to="/login">Login
                    </Link>
                </li> */}
                <li>
                    <Link className='nav-style' to="/contact"> Contact
                    </Link>
                </li>
            </ul>
            </div>
            </div>
        </nav>
    )
}
