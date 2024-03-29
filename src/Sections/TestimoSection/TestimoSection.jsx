import React from 'react'
import './TestimoSection.css'
import TestimoCard from '../../Components/TestimoCard/TestimoCard'
import testimonial_image from '../../Assets/testimonial image.png'
import star from '../../Assets/star.svg'

const TestimoSection = () => {
  return (
    <div className='testimo-section'>
        <div className="top">
            <p className="section-heading">testimonial</p>
            <p className="section-header">what are they saying</p>
            <p className="section-text">Lorem ipsum dolor sit amet consectetur. Non tincidunt <br />magna non et elit. Dolor  turpis molestie dui <br />magnis facilisis at fringilla quam</p>
        </div>
        <div className="testimo-bottom">
            <TestimoCard image={testimonial_image} content='Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.' rating={star} name='john doe'/>
        </div>
    </div>
  )
}

export default TestimoSection