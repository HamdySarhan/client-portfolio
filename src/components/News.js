import React from 'react';
import './News.css';
import news1 from '../assets/background.png';
import { useTranslation } from 'react-i18next';
export default function News() {
  const { t, i18n } = useTranslation();
  return (
    <div
      className='big-news-container'
      id='news'
      style={{ textAlign: 'center', paddingTop: '120px' }}
    >
      <h1>{t('news')}</h1>

      <div className='news-container'>
        <div
          className='news-card'
          style={{ backgroundImage: `url(${news1})`, backgroundSize: 'cover' }}
        >
          <div className='news-paragraph'>
            <h3 style={{ margin: '0' }}>News</h3>
            <p style={{ margin: '0' }}>test test test</p>
            <a
              style={{ margin: '0', textDecoration: 'none' }}
              href='www.google.com'
              target='_blank'
            >
              {t('read')}
            </a>
          </div>
        </div>
        <div
          className='news-card'
          style={{ backgroundImage: `url(${news1})`, backgroundSize: 'cover' }}
        >
          <div className='news-paragraph'>
            <h3 style={{ margin: '0' }}>News</h3>
            <p style={{ margin: '0' }}>test test test</p>
            <a
              style={{ margin: '0', textDecoration: 'none' }}
              href='www.google.com'
              target='_blank'
            >
              {t('read')}
            </a>
          </div>
        </div>
        <div
          className='news-card'
          style={{ backgroundImage: `url(${news1})`, backgroundSize: 'cover' }}
        >
          <div className='news-paragraph'>
            <h3 style={{ margin: '0' }}>News</h3>
            <p style={{ margin: '0' }}>test test test</p>
            <a
              style={{ margin: '0', textDecoration: 'none' }}
              href='www.google.com'
              target='_blank'
            >
              {t('read')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
