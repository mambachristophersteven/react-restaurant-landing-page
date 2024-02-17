import React from 'react'
import './Home.css'
import HomeBanner from '../../Components/HomeBanner/HomeBanner'

const Home = () => {
  return (
    <div className='home'>
        <HomeBanner />
        <div className="left">
            <p className="home-heading">Your Favourite Food Delivered Hot & Fresh</p>
            <p className="home-text">Healthy switcher chefs do all the prep work, like  peeding, chopping & marinating, so you can cook a fresh food.</p>
        </div>
    </div>
  )
}

export default Home