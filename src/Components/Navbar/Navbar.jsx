import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <p className="logo-text">FOODIE</p>
        </div>
        <div className="nav-menu">
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">testimonials</a></li>
                <li><a href="#">contact</a></li>
                <li><a href="#">cart</a></li>
                <li><a href="#"><button>booking now</button></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar