import React from 'react';
import { Link } from 'react-router-dom';

export const MainPage = () => {
    return (
        <header>
            <a href="#"> Logo</a>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">About
                        </Link>
                    </li>
                    <li>
                        <Link to="/brands">Brands
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
