import React from 'react'
import './Home.css'
import HomeSection from '../../Sections/HomeSection/HomeSection'
import AboutSection from '../../Sections/AboutSection/AboutSection'


const Home = () => {
  return (
    <div className='home'>
      <HomeSection />
      <AboutSection />
    </div>
  )
}

export default Home