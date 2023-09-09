import React, { useContext } from 'react';
import './News.css';
import news1 from '../assets/case2.png';
import news2 from '../assets/news2.png';
import news3 from '../assets/news3.png';
import LanguageContext from './LanguageContext';
import { useTranslation } from 'react-i18next';
export default function News() {
  const { language, setLanguage } = useContext(LanguageContext);
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
          style={{ backgroundImage: `url(${news1})`, backgroundSize: '100%' }}
        >
          <div className='news-paragraph'>
            <h3>{t('news1')}</h3>
            <p dir={language == 'en' ? 'ltr' : 'rtl'} style={{ margin: '0' }}>
              {t('news1description')}
            </p>
            <a
              style={{ margin: '0', textDecoration: 'none' }}
              href='https://www.emaratalyoum.com/local-section/accidents/2020-07-14-1.1374588?fbclid=IwAR2nLFvGqAb3ubHiY7JFQx3pMTbS68g3mycRdUXgr1ZQsD5E7DllCDFQ6dM'
              target='_blank'
            >
              {t('read')}
            </a>
          </div>
        </div>
        <div
          className='news-card'
          style={{ backgroundImage: `url(${news2})`, backgroundSize: '100%' }}
        >
          <div className='news-paragraph'>
            <h3>{t('news2')}</h3>
            <p dir={language == 'en' ? 'ltr' : 'rtl'} style={{ margin: '0' }}>
              {t('news2description')}
            </p>
            <a
              style={{ margin: '0', textDecoration: 'none' }}
              href='https://www.emaratalyoum.com/local-section/accidents/2020-06-20-1.1364331?fbclid=IwAR2fSFIDfnTF7AbZnZrZXOp2oH4lW1MGKUBfBsbl4d-rvowM80fZwIqkSJ8'
              target='_blank'
            >
              {t('read')}
            </a>
          </div>
        </div>
        <div
          className='news-card'
          style={{ backgroundImage: `url(${news3})`, backgroundSize: '100%' }}
        >
          <div className='news-paragraph'>
            <h3>{t('news3')}</h3>
            <p dir={language == 'en' ? 'ltr' : 'rtl'} style={{ margin: '0' }}>
              {t('news3description')}
            </p>
            <a
              style={{ margin: '0', textDecoration: 'none' }}
              href='https://www.emaratalyoum.com/local-section/accidents/2021-10-21-1.1551692?fbclid=IwAR3iJ3GOP6RWqpoSFMIfWBoRzQu0IzRVrdESvmKNvgQWrfzN8DHb8kc13s8'
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
