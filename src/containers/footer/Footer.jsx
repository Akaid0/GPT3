import React from 'react';
import gpt3logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Step into the future now</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Join now</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3logo} alt='logo' />
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>hochedezluca@proton.me</p>
          <p><a style={{color:'white'}} href='https://www.linkedin.com/in/lucawebdev/'>Linkedin</a></p>
          <p><a style={{color:'white'}} href='https://github.com/Akaid0'>Github</a></p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2023 Luca. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer