import React from 'react'
import './Home.css'
import HomeSection from '../../Sections/HomeSection/HomeSection'
import AboutSection from '../../Sections/AboutSection/AboutSection'
import WorkSection from '../../Sections/WorkSection/WorkSection'
import TestimoSection from '../../Sections/TestimoSection/TestimoSection'


const Home = () => {
  return (
    <div className='home'>
      <HomeSection />
      <AboutSection />
      <WorkSection />
      <TestimoSection />
    </div>
  )
}

export default Home