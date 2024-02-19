import React from 'react'
import './AboutSection.css'
import AboutBanner from '../../Components/AboutBanner/AboutBanner'
import about_image from '../../Assets/about-page-image.png'
import arrow from '../../Assets/arrow.svg'


const AboutSection = () => {
  return (
    <div className='about-section'>
        <AboutBanner />
        <div className="left">
            <img src={about_image} alt="" />
        </div>
        <div className="right">
            <p className="section-heading">about</p>
            <p className="section-header">Food Is An Important Part Of A Balanced Diet</p>
            <p className="section-text">Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam. <br />Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
            <div className="buttons">
            <button>
                <p>learn more</p>
                <img src={arrow} alt="" />
            </button>
            </div>
        </div>
    </div>
  )
}

export default AboutSection