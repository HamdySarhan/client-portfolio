import React from 'react';
import './Case.css';
import { useTranslation } from 'react-i18next';
const Case = ({ imgSrc, title, description, articleLink }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className='case-card'>
      <img src={imgSrc}></img>

      <div className='overlay'>
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
