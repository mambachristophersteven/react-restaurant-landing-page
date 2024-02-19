import React from 'react'
import './ProgressCard.css'
const ProgressCard = (props) => {
  return (
    <div className='progress-card'>
        <img src={props.image} alt="" />
        <p className="card-heading">{props.heading}</p>
        <p className="card-content">{props.content}</p>
    </div>
  )
}

export default ProgressCard