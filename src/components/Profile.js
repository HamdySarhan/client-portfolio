import React from 'react';
import './Profile.css';
import facebook from '../assets/icons8-facebook-50 (1).png';
import back from '../assets/back.png';
import { useTranslation } from 'react-i18next';

export default function Profile() {
  const { t, i18n } = useTranslation();
  return (
    <section id='profile'>
      <img className='background-main' src={back}></img>
      <div class='section__text'>
        <h1 class='title1'>{t('profile1')}</h1>
        <h2 className='title2'>{t('title2')}</h2>
        <p class='section__text__p2'>{t('profile2')}</p>
        <div class='btn-container'>
          <a
            class='btn btn-color-2'
            style={{ textDecoration: 'none', marginTop: '20px' }}
            href='#contact'
            onclick='toggleMenu()'
          >
            {t('contact')}
          </a>
        </div>
      </div>
    </section>
  );
}
