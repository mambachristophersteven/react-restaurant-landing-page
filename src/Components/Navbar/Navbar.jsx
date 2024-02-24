import React from 'react'
import './Navbar.css'
import cart from '../../Assets/shopping-cart.svg'
import menu_svg from '../../Assets/menu.svg'

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
          <li>
            <img src={cart} alt="" />
          </li>
          <li><button>booking now</button></li>
        </ul>
      </div>
      <div className="menu-icon">
        <img src={menu_svg} alt="" />
      </div>
    </div>
  )
}

export default Navbar