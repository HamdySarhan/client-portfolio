import React from 'react';
import './Home.css';
import logo from '../assets/logo.png';
import background from '../assets/background.png';
import Navbar from './Navbar';
import './mediaqueries.css';
import facebook from '../assets/icons8-facebook-50.png';
import about from '../assets/16711600_1852569948345448_8874226866558149545_n.jpg';
import exp from '../assets/experience.png';
import edu from '../assets/education.png';
import arrow from '../assets/arrow.png';
import check from '../assets/checkmark.png';
import Case from './Case';
import case1img from '../assets/5345088.jpeg';
import email from '../assets/email.png';
import Cases from './Cases';
import back from '../assets/back.png';
import Profile from './Profile';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';
import News from './News';
import LanguageProvider from './LanguageProvider';

const Home = () => (
  <div>
    <LanguageProvider>
      <Navbar></Navbar>
      <Profile></Profile>
      <Experience></Experience>
      <Cases></Cases>
      <News></News>
      <Contact></Contact>
      <Footer></Footer>
    </LanguageProvider>
  </div>
);

export default Home;
