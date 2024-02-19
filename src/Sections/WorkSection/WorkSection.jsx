import React from 'react'
import './WorkSection.css'
import ProgressCard from '../../Components/ProgressCard/ProgressCard'
import pick_meals_image from '../../Assets/pick-meals-image.svg'
import choose_how_image from '../../Assets/choose-how-image.svg'
import deliver_fast_image from '../../Assets/delivery-fast-image.svg'

const WorkSection = () => {
  return (
    <div className='work-section'>
        <div className="top">
            <p className="section-heading">work</p>
            <p className="section-header">how it works</p>
            <p className="section-text">Lorem ipsum dolor sit amet consectetur. Non tincidunt <br />magna non et elit. Dolor  turpis molestie dui <br />magnis facilisis at fringilla quam.</p>
        </div>
        <div className="bottom">
            <ProgressCard
             image={pick_meals_image} 
             heading='pick meals' 
             content='Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.'
            />
            <ProgressCard
             image={choose_how_image} 
             heading='choose how often' 
             content='Lorem ipsum dolor sit amet consectetur. Maecenas orci et'
            />
            <ProgressCard
             image={deliver_fast_image} 
             heading='fast deliveries' 
             content='Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum'
            />
        </div>
    </div>
  )
}

export default WorkSection