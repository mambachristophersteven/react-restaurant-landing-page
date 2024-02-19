import React from 'react'
import './AboutBanner.css'
import about_banner from '../../Assets/about-banner.svg'
const AboutBanner = () => {
  return (
    <div className='about-banner'>
        <img src={about_banner} alt="" />
    </div>
  )
}

export default AboutBanner