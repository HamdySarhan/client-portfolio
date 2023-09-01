import React from 'react';
import './News.css';
import news1 from '../assets/background.png';

export default function News() {
  return (
    <div
      className='big-news-container'
      id='news'
      style={{ textAlign: 'center', marginTop: '250px' }}
    >
      <h1>News</h1>

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
              Read more
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
              Read more
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
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
