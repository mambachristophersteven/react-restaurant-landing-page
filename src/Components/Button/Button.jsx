import React from 'react'
import './Button.css'
const Button = (props) => {
  return (
    <div className='button'>
        <button>
            <p>{props.content}</p>
            <img src={props.image} alt="" />
        </button>
    </div>
  )
}

export default Button