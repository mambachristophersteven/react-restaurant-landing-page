import React from 'react'
import './TestimoCard.css'
const TestimoCard = (props) => {
  return (
    <div className='testimo-card'>
        <img src={props.image} alt="" />
        <p className="content-text">{props.content}</p>
        <div className="ratings">
            <img src={props.rating} alt="" className="rating" />
            <img src={props.rating} alt="" className="rating" />
            <img src={props.rating} alt="" className="rating" />
            <img src={props.rating} alt="" className="rating" />
            <img src={props.rating} alt="" className="rating" />
        </div>
        <p className="name">{props.name}</p>
    </div>
  )
}

export default TestimoCard