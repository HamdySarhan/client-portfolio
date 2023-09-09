import React from 'react';
import Case from './Case';
import './Cases.css';
import case1 from '../assets/case1.png';
import case2 from '../assets/case2.png';
import case4 from '../assets/case4.png';
import case5 from '../assets/case5.png';
import case6 from '../assets/case6.png';
import { useTranslation } from 'react-i18next';
const Cases = (lang) => {
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
            lang={lang}
            imgSrc={case1}
            title={t('case1')}
            description={t('case1description')}
            articleLink='https://www.emaratalyoum.com/local-section/accidents/2023-09-03-1.1779703?fbclid=IwAR2M4_nm6jfhLM_pVgwV2ApI9XoUNyYYTuyGAPo7qRAP_UIh_gVXmlfNtvA'
          ></Case>
        </div>
        <div className='case-box'>
          <Case
            imgSrc={case2}
            title={t('case2')}
            description={t('case2description')}
            articleLink='https://www.emaratalyoum.com/local-section/accidents/2023-01-22-1.1710578?fbclid=IwAR2vJHxIvpim9a0RVZli9H273vfYY9xseTsNr54ncvBOc03spXMV35m5OWY'
          ></Case>
        </div>
        <div className='case-box'>
          <Case
            imgSrc={case2}
            title={t('case3')}
            description={t('case3description')}
            articleLink='https://www.emaratalyoum.com/local-section/accidents/2022-03-04-1.1606429?fbclid=IwAR07wxF_n1kY_KqWyo6qWENlBgS3gOVWSWgfJS-Lq5q8a-UB_jd7ESGHlbE'
          ></Case>
        </div>
        <div className='case-box'>
          <Case
            imgSrc={case4}
            title={t('case4')}
            description={t('case4description')}
            articleLink='https://www.emaratalyoum.com/local-section/accidents/2021-04-11-1.1476703?fbclid=IwAR2SHqWiVj8J-C5n2gWO-kDxRT_D2mCXDPXwsvfnOXMbKtfbTTltPxcOUCs'
          ></Case>
        </div>
        <div className='case-box'>
          <Case
            imgSrc={case5}
            title={t('case5')}
            description={t('case5description')}
            articleLink='https://www.emaratalyoum.com/local-section/accidents/2020-09-30-1.1404056?fbclid=IwAR2En9pqwlKiw7tNIoj4vciqQhoUHPdni05gKFiT_rQBtzW-5daYOEmDtnA'
          ></Case>
        </div>
        <div className='case-box'>
          <Case
            imgSrc={case6}
            title={t('case6')}
            description={t('case6description')}
            articleLink='https://www.emaratalyoum.com/local-section/accidents/2020-09-16-1.1398966?fbclid=IwAR2PapZlvqV9pJftgxXj2ORzqEduC0pxLPejz6BU86S2E211uirLnIcMdZM'
          ></Case>
        </div>
      </div>
    </div>
  );
};

export default Cases;
