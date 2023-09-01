import React from 'react';
import './Profile.css';
import facebook from '../assets/icons8-facebook-50 (1).png';
import back from '../assets/back.png';
export default function Profile() {
  return (
    <section id='profile'>
      <img className='background-main' src={back}></img>
      <div class='section__text'>
        <h1 class='title1'>
          Welcome to Abdallah Sarhan, The Best Legal Consultant in the United
          Arab Emirates.
        </h1>
        <p class='section__text__p2'>
          Turning Legal Complexity into Your Advantage
        </p>
        <div class='btn-container'>
          <a
            class='btn btn-color-2'
            style={{ textDecoration: 'none', marginTop: '20px' }}
            href='#contact'
            onclick='toggleMenu()'
          >
            Contact info
          </a>
        </div>
      </div>
    </section>
  );
}
