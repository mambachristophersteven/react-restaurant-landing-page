import React from 'react'
import './HomeSection.css'
import HomeBanner from '../../Components/HomeBanner/HomeBanner'
import Button from '../../Components/Button/Button'
import home_banner from '../../Assets/homepage-image.png'

const HomeSection = () => {
  return (
    <div className='home'>
      <HomeBanner />
      <div className="left">
          <p className="home-heading">Your Favourite Food Delivered Hot & <br /> Fresh</p>
          <p className="home-text">Healthy switcher chefs do all the prep work, like  peeding, chopping & marinating, so you can cook a fresh food.</p>
          <Button />
      </div>
      <div className="right">
          <img src={home_banner} alt="" />
      </div>
    </div>
  )
}

export default HomeSection