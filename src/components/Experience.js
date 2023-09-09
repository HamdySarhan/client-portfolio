import React, { useEffect } from 'react';
import './Experience.css';
import about from '../assets/16711600_1852569948345448_8874226866558149545_n.jpg';
import about2 from '../assets/8f342d89-3e6c-4421-ae37-253abac58961.png';
import about3 from '../assets/5ce6cb32-36d7-4802-98e5-923448e451c1.png';
import exp from '../assets/experience.png';
import law from '../assets/law.png';
import lawyer from '../assets/lawyer.png';
import arrow from '../assets/arrow.png';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  useEffect(() => {
    const handleScroll = () => {
      const fadeElementsLeft = document.querySelectorAll('.fade-in-left');
      const fadeElementsRight = document.querySelectorAll('.fade-in-right');

      const checkVisibility = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
      };

      fadeElementsLeft.forEach((el) => {
        if (checkVisibility(el)) {
          el.classList.add('fade-in-active');
        } else {
          el.classList.remove('fade-in-active');
        }
      });

      fadeElementsRight.forEach((el) => {
        if (checkVisibility(el)) {
          el.classList.add('fade-in-active');
        } else {
          el.classList.remove('fade-in-active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const { t, i18n } = useTranslation();
  return (
    <div id='about' style={{ paddingTop: '120px' }}>
      <h1>{t('about')}</h1>
      <div className='imgAndText1'>
        <div className='imgAboutContainer fade-in-left'>
          <img src={about}></img>
        </div>
        <div className='logoAndParagraph fade-in-right'>
          <div>
            <img src={law}></img>
          </div>
          <p>{t('paragraph1')}</p>
        </div>
      </div>
      <div className='imgAndText1'>
        <div className='logoAndParagraph fade-in-left'>
          <div>
            <img src={exp}></img>
          </div>
          <p>{t('paragraph2')}</p>
        </div>
        <div className='imgAboutContainer fade-in-right'>
          <img src={about2}></img>
        </div>
      </div>
      <div className='imgAndText1'>
        <div className='imgAboutContainer fade-in-left'>
          <img src={about3}></img>
        </div>
        <div className='logoAndParagraph fade-in-right'>
          <div>
            <img src={lawyer}></img>
          </div>
          <p>{t('paragraph3')}</p>
        </div>
      </div>
    </div>
  );
}
