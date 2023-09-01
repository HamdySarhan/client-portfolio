import React, { useState } from 'react';
import logo from '../assets/Frame 353.png';
import background from '../assets/background.png';
import './mediaqueries.css';
import './Navbar.css';

export default function Navbar() {
  const [menu, setMenu] = useState('closed');
  const toggele = () => {
    if (menu == 'closed') setMenu('open');
    else setMenu('closed');

    console.log(menu);
  };

  return (
    <div>
      <nav id='desktop-nav'>
        <div class='logo'>
          <a href='#profile'>
            <img src={logo} alt='' style={{ width: '70%' }} />
          </a>
        </div>
        <div>
          <ul class='nav-links'>
            <li>
              <a className='a-nav' href='#about'>
                About Us
              </a>
            </li>
            <li>
              <a className='a-nav' href='#cases'>
                Cases
              </a>
            </li>
            <li>
              <a className='a-nav' href='#news'>
                News
              </a>
            </li>
            <li>
              <a className='a-nav' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id='hamburger-nav'>
        <div class='logo'>
          <a href='#profile'>
            <img src={logo} alt='' />
          </a>
        </div>
        <div class='hamburger-menu'>
          <div className='hamburger-icon' onClick={() => toggele()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {menu == 'open' ? (
            <div className='menu-links'>
              <li>
                <a className='a-nav' href='#about' onClick={() => toggele()}>
                  About Us
                </a>
              </li>
              <li>
                <a className='a-nav' href='#cases' onClick={() => toggele()}>
                  Cases
                </a>
              </li>
              <li>
                <a className='a-nav' href='#news' onClick={() => toggele()}>
                  News
                </a>
              </li>
              <li>
                <a className='a-nav' href='#contact' onClick={() => toggele()}>
                  Contact
                </a>
              </li>
            </div>
          ) : (
            ''
          )}
        </div>
      </nav>
    </div>
  );
}
