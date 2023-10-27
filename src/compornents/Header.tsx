import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='h'>
        <h1 className='h-logo'>Fukuchi-Y</h1>
        <nav className='h-nav'>
            <ul className='h-nav-list'>
                <li className='h-nav-item'>
                    <Link to="/" className='h-nav-link'>Top</Link>
                </li>
                <li>
                    <Link to="/Works" className='h-nav-link'>Works</Link>
                </li>
                <li>
                    <Link to="/Contact" className='h-nav-link'>Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;