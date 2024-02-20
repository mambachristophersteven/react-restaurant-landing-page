import React from 'react'
import './Footer.css'
import youtube_icon from '../../Assets/youtube-icon.svg'
import facebook_icon from '../../Assets/facebook-icon.svg'
import twitter_icon from '../../Assets/twitter-icon.svg'
import linkedin_icon from '../../Assets/linkedin-icon.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-left">
        <p className="foodie-name">FOODIE</p>
        <div className="social-media">
          <img src={twitter_icon} alt="" />
          <img src={linkedin_icon} alt="" />
          <img src={youtube_icon} alt="" />
          <img src={facebook_icon} alt="" />
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-links">
          <Link to='#'><p className='footer-link'>quality</p></Link>
          <Link to='#'><p className='footer-link'>help</p></Link>
          <Link to='#'><p className='footer-link'>share</p></Link>
          <Link to='#'><p className='footer-link'>carriers</p></Link>
          <Link to='#'><p className='footer-link'>work</p></Link>
          <Link to='#'><p className='footer-link'>testimonials</p></Link>
        </div>
        <div className="footer-links">
          <Link to='#'><p className='footer-link'>+233 980 456 670</p></Link>
          <Link to='#'><p className='footer-link'>hello@food.com</p></Link>
          <Link to='#'><p className='footer-link'>press@food.com</p></Link>
          <Link to='#'><p className='footer-link'>contact@food.com</p></Link>
        </div>
        <div className="footer-links">
          <Link to='#'><p className='footer-link'>terms & conditions</p></Link>
          <Link to='#'><p className='footer-link'>privacy policy</p></Link>
        </div>
      </div>
    </div>
  )
}


export default Footer