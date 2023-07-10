import React from 'react'
import '../css/home.css';
import { Link } from 'react-router-dom';
import { Foot } from './Foot';


import { Brands } from './Brands';

export const Home = () => {
    return (
        <>
            <header>
                <nav >
                    <div className='nav-container'>

                        <div className='nav-section'>

                            <ul>
                                <li>
                                    <Link className='link-style' to="/">Home
                                    </Link>
                                </li>
                                <li>
                                    <Link className='link-style' to="/about">About
                                    </Link>
                                </li>
    
                                <li>
                                    <Link className='link-style' to="/contact"> Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <div className="background-container">
                    <div className="title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className='head-container'>
                        <h1> Expolre our world! </h1>
                    </div>
                </div>
                <Brands />
            </main>
            <footer>
                <Foot />
            </footer>
        </>
    )
}
