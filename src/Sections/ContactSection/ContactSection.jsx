import React from 'react'
import './ContactSection.css'
import Button from '../../Components/Button/Button'
import arrow from '../../Assets/arrow.svg'

const ContactSection = () => {
  return (
    <div className='contact-section'>
      <div className="contact-top">
        <p className="section-header">have question in mind?</p>
        <p className="section-header">let us help you</p>
      </div>
      <div className="contact-bottom">
        <form action="#">
          <input type="email" name="email" id="email" placeholder='yourmail@gmail.com'/>
          <Button content='submit' image={arrow} />
        </form>
      </div>
    </div>
  )
}

export default ContactSection