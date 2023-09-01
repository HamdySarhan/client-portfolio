import React from 'react';
import './Contact.css';
import email from '../assets/icons8-email-50.png';
import facebook from '../assets/icons8-facebook-50.png';
import phone from '../assets/icons8-phone-50.png';

export default function Contact() {
  return (
    <section id='contact'>
      <h1 class='title-contact'>Contact Me</h1>
      <div class='contact-info-upper-container'>
        <div class='contact-info-container'>
          <img
            src={email}
            alt='Email icon'
            class='icon contact-icon email-icon'
          />
          <p>
            <a href='mailto:examplemail@gmail.com'>abdallahsarhan@gmail.com</a>
          </p>
        </div>
        <div class='contact-info-container'>
          <img
            src={phone}
            alt='Email icon'
            class='icon contact-icon email-icon'
          />
          <p>
            <a href='+971523384545'>+971523384545</a>
          </p>
        </div>
        <div class='contact-info-container'>
          <img
            src={facebook}
            alt='Email icon'
            class='icon contact-icon email-icon'
          />
          <p>
            <a href='https://www.facebook.com/abdallah.sarhan.927'>
              facebook.com/abdallah.sarhan.927
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
