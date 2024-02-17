import React from 'react'
import './Button.css'
import arrow from '../../Assets/arrow.svg'
const Button = () => {
  return (
    <div className='button'>
        <button>
            <p>order now</p>
            <img src={arrow} alt="" />
        </button>
    </div>
  )
}

export default Button