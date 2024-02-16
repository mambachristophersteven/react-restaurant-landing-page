import React from 'react';
import './HomeBanner.css';
import home_banner from '../../Assets/home-banner.svg'

const HomeBanner = () => {
  return (
    <div className='home-banner'>
        <img src={home_banner} alt="" />
    </div>
  )
}

export default HomeBanner