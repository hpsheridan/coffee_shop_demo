import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

//Footer available throughout website
function Footer() {
  return (
    <div className='footer-container'>
      <div className='hours'>
        <h1><b>Hours</b></h1>
        <p>Monday-Sunday: 9:00am-3:00PM</p>
      </div>

      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Sign up for emails to recieve insider deals!
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
            <Button className="sub-bttn" buttonStyle='btn--outline' onClick={() => { alert("Thanks for Subscribing!") }}>Subscribe</Button>
          </form>
        </div>
      </section>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about'>About Us</Link>
            <Link to='/about/#termsOfServiceA1'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
            <Link to='/contact'>Careers</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>

          <div class='footer-link-items'>
            <h2>Menu</h2>
            <Link to='/menu'>Order Online</Link>
          </div>
        </div>
      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Coffee For You
              <i class='fas fa-mug-hot' />
            </Link>
          </div>
          <small class='website-rights'>Coffee For You © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Footer;