import React, { useContext } from 'react';
import './Case.css';
import { useTranslation } from 'react-i18next';
import LanguageContext from './LanguageContext';
const Case = ({ imgSrc, title, description, articleLink, lang }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  return (
    <div className='case-card'>
      <img src={imgSrc}></img>

      <div className='overlay' dir={language == 'en' ? 'ltr' : 'rtl'}>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={articleLink} target='_blank'>
          {t('read')}
        </a>
      </div>
    </div>
  );
};

export default Case;
