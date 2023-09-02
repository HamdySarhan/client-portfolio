import React from 'react';
import Case from './Case';
import './Cases.css';
import case1img from '../assets/5345088.jpeg';
import { useTranslation } from 'react-i18next';
const Cases = () => {
  const { t, i18n } = useTranslation();
  return (
    <div
      style={{
        textAlign: 'center',
        paddingTop: '120px',
        width: '80%',
        marginLeft: '10%',
        justifyContent: 'center',
      }}
      id='cases'
    >
      <h1>{t('cases')}</h1>
      <div className='cases-container'>
        <div className='case-box'>
          <Case
            imgSrc={case1img}
            title='Case1'
            description='test test test test test testtest test testtest test testtest test testtest test test'
            articleLink='https://www.alkhaleej.ae/2023-08-20/%D8%B4%D9%83%D9%88%D9%89-%D9%83%D9%8A%D8%AF%D9%8A%D8%A9-%D8%B9%D9%84%D9%89-%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9-%D9%88%D8%A7%D9%84%D9%85%D8%AD%D9%83%D9%85%D8%A9-%D8%AA%D8%A8%D8%B1%D8%A6%D9%87%D8%A7/%D8%AD%D9%88%D8%A7%D8%AF%D8%AB-%D9%88%D9%82%D8%B6%D8%A7%D9%8A%D8%A7/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%AF%D8%A7%D8%B1?utm_campaign=nabdapp.com&utm_medium=referral&utm_source=nabdapp.com&ocid=Nabd_App&fbclid=IwAR0vjc-qrBDws1O3vd6jrsMhh1heXNVmTI9jUg928_r8tXzIZD6Slwkr4hQ'
          ></Case>
        </div>
        <div className='case-box'>
          <Case
            imgSrc={case1img}
            title='Case 2'
            description='test test test test test testtest test testtest test testtest test testtest test test'
            articleLink='www.google.com'
          ></Case>
        </div>
        <div className='case-box'>
          <Case
            imgSrc={case1img}
            title='Case 3'
            description='test test test test test testtest test testtest test testtest test testtest test test'
            articleLink='www.google.com'
          ></Case>
        </div>
        <div className='case-box'>
          <Case
            imgSrc={case1img}
            title='test'
            description='test test test test test testtest test testtest test testtest test testtest test test'
            articleLink='www.google.com'
          ></Case>
        </div>
        <div className='case-box'>
          <Case
            imgSrc={case1img}
            title='test'
            description='test test test test test testtest test testtest test testtest test testtest test test'
            articleLink='www.google.com'
          ></Case>
        </div>
        <div className='case-box'>
          <Case
            imgSrc={case1img}
            title='test'
            description='test test test test test testtest test testtest test testtest test testtest test test'
            articleLink='www.google.com'
          ></Case>
        </div>
      </div>
    </div>
  );
};

export default Cases;
