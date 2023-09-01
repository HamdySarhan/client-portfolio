import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <nav>
        <div class='nav-links-container-footer'>
          <ul class='nav-links-footer'>
            <li>
              <a href='#about'>About Us</a>
            </li>
            <li>
              <a href='#cases'>Cases</a>
            </li>
            <li>
              <a href='#news'>News</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 Hamdy Sarhan. All Rights Reserved.</p>
    </footer>
  );
}
