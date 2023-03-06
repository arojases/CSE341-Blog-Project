import React from 'react';
import {Link} from  'react-router-dom';

function Header() {
  return (
    <header>
      <div className='header-container'>
        <div className='header-left'>
        <Link to="/">
            <img
              src="https://cdn.glitch.global/9bee23ec-2919-4955-abd9-69ba210d2546/blog.png"
              alt="logo"
            />
          </Link>
          <h3>Products</h3>
        </div>
        <div className='header-middle'>
          <div className='header-search-container'></div>
        </div>
        <div className='header-right'></div>
      </div>
    </header>
  );
}

export default Header;
