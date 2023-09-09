import React from 'react';
import './Contact.css';
import email from '../assets/icons8-email-50.png';
import facebook from '../assets/icons8-facebook-50.png';
import phone from '../assets/icons8-phone-50.png';
import location from '../assets/icons8-marker-50.png';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <section id='contact'>
      <h1 class='title-contact'>{t('contact')}</h1>
      <div class='contact-info-upper-container'>
        <div class='contact-info-container'>
          <img
            src={email}
            alt='Email icon'
            class='icon contact-icon email-icon'
          />
          <p>
            <a href='mailto:sarhan773@gmail.com' target='_blank'>
              sarhan773@gmail.com
            </a>
          </p>
        </div>
        <div class='contact-info-container'>
          <img
            src={phone}
            alt='Email icon'
            class='icon contact-icon email-icon'
          />
          <p>
            <a href='https://wa.me/+971523384545' target='_blank'>
              +971523384545
            </a>
          </p>
        </div>
        <div class='contact-info-container'>
          <img
            src={facebook}
            alt='Email icon'
            class='icon contact-icon email-icon'
          />
          <p>
            <a
              href='https://www.facebook.com/abdallah.sarhan.927'
              target='_blank'
            >
              facebook.com/abdallah.sarhan.927
            </a>
          </p>
        </div>
        <div class='contact-info-container'>
          <img
            src={location}
            alt='location icon'
            class='icon contact-icon email-icon'
          />
          <p>
            <a
              target='_blank'
              href='https://www.google.com/maps/place/Ras+Al-Khaimah+-+Ras+al+Khaimah+-+United+Arab+Emirates/@25.7266072,55.8034689,11z/data=!3m1!4b1!4m6!3m5!1s0x3ef676ad264b24c1:0x10f6affe1a9e78a3!8m2!3d25.8006926!4d55.9761994!16s%2Fg%2F121djg4n?entry=ttu'
            >
              {t('location')}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
