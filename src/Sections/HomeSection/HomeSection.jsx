import React from 'react'
import './HomeSection.css'
import Button from '../../Components/Button/Button'
import home_banner from '../../Assets/homepage-image.png'


const HomeSection = () => {
  return (
    <div className='home-section'>
      <div className="left">
          <p className="home-heading">Your Favourite Food Delivered Hot & Fresh</p>
          <p className="home-text">Healthy switcher chefs do all the prep work, like  peeding, chopping & marinating, so you can cook a fresh food.</p>
          <div className="button">
          <Button content = 'order now' />
          </div>
      </div>
      <div className="right">
          <img src={home_banner} alt="" />
      </div>
    </div>
  )
}

export default HomeSection