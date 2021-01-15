import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from './logo.png';
function Footer() {
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
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            


            <Link to='https://www.instagram.com/fandtnature/'>Instagram</Link>
            <Link to='https://www.facebook.com/paurush.dobhal'>Facebook</Link>
            <Link to='https://www.linkedin.com/in/fandt-nature-560447204/'>Linkedin</Link>
            <Link to='https://twitter.com/FandTNature1'>Twitter</Link>
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
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/paurush.dobhal'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/fandtnature/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/fandt-nature-560447204/'
              target='_blank'
              aria-label='Linkedin'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://twitter.com/FandTNature1'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
