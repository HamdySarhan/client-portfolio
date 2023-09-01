import React from 'react';
import './Case.css';

const Case = ({ imgSrc, title, description, articleLink }) => {
  return (
    <div className='case-card'>
      <img src={imgSrc}></img>

      <div className='overlay'>
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={articleLink} target='_blank'>
          Read more
        </a>
      </div>
    </div>
  );
};

export default Case;
