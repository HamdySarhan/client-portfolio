import React, { useState, useEffect, useContext } from 'react';
import logo from '../assets/Frame 353.png';
import logoarab from '../assets/logoarabic.png';
import background from '../assets/background.png';
import { useTranslation } from 'react-i18next';
import LanguageContext from './LanguageContext';
import './mediaqueries.css';
import './Navbar.css';

export default function Navbar() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [menu, setMenu] = useState('closed');
  const toggele = () => {
    if (menu == 'closed') setMenu('open');
    else setMenu('closed');

    console.log(menu);
  };

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const [backgroundColor, setBackgroundColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // if scroll is less than the viewport height, set background to transparent
      // otherwise set it to black
      if (currentScrollY < window.innerHeight - 800) {
        setBackgroundColor('rgba(53, 53, 53, 0.25)');
      } else {
        setBackgroundColor('rgba(53, 53, 53, 0.95)');
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <nav id='desktop-nav' style={{ background: `${backgroundColor}` }}>
        <div class='logo'>
          <a href='#profile'>
            <img
              src={language == 'en' ? logo : logoarab}
              alt=''
              style={{ width: '70%' }}
            />
          </a>
        </div>
        <div>
          <ul class='nav-links'>
            <li>
              <a className='a-nav' href='#about'>
                {t('about')}
              </a>
            </li>
            <li>
              <a className='a-nav' href='#cases'>
                {t('cases')}
              </a>
            </li>
            <li>
              <a className='a-nav' href='#news'>
                {t('news')}
              </a>
            </li>
            <li>
              <a className='a-nav' href='#contact'>
                {t('contact')}
              </a>
            </li>
            <li>
              <a
                className='a-nav'
                style={{ cursor: 'pointer' }}
                onClick={toggleLanguage}
              >
                {t('lang')}
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id='hamburger-nav' style={{ background: `${backgroundColor}` }}>
        <div class='logo'>
          <a href='#profile' onClick={() => toggele}>
            <img src={language == 'en' ? logo : logoarab} alt='' />
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
                  {t('about')}
                </a>
              </li>
              <span className='separator'></span>
              <li>
                <a className='a-nav' href='#cases' onClick={() => toggele()}>
                  {t('cases')}
                </a>
              </li>
              <span className='separator'></span>
              <li>
                <a className='a-nav' href='#news' onClick={() => toggele()}>
                  {t('news')}
                </a>
              </li>
              <span className='separator'></span>
              <li>
                <a className='a-nav' href='#contact' onClick={() => toggele()}>
                  {t('contact')}
                </a>
              </li>
              <span className='separator'></span>
              <li>
                <a className='a-nav' onClick={toggleLanguage}>
                  {t('lang')}
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
