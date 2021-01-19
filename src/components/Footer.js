import React from 'react';
import './Footer.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import emailjs from 'emailjs-com';

function Footer() {
  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target);
    emailjs.sendForm('service_ajkp2cd', 'template_av7vkrn', e.target, 'user_zPE9wkqUAY4IulRjvdWuf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Be a part of our family.
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form onSubmit={sendEmail}>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button variant="outline-dark" size="lg" type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Meet our team</Link>
            <Link to='/'>Meet our advisors</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <a href='mailto:utttu123@gmail.com'>Mail</a>
            <h6>+91-7014662503</h6>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/fandtnature/'>Instagram</a>
            <a href='https://www.facebook.com/paurush.dobhal'>Facebook</a>
            <a href='https://www.linkedin.com/in/fandt-nature-560447204/'>Linkedin</a>
            <a href='https://twitter.com/FandTNature1'>Twitter</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              F&T Nature
              <img className="logo" src={logo} alt='my portfolio logo'/>
            </Link>
          </div>
          <small class='website-rights'>F&T Nature © 2020</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/paurush.dobhal'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/fandtnature/'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/fandt-nature-560447204/'
              aria-label='Linkedin'
            >
              <i class='fab fa-linkedin' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/FandTNature1'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
