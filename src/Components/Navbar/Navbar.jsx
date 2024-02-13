import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <p className="logo-text">FOODIE</p>
        </div>
        <div className="nav-menu">
            <ul>
                <li>home</li>
                <li>about</li>
                <li>testimonials</li>
                <li>contact</li>
                <li>cart</li>
                <li><button>booking now</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar