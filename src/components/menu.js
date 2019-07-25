import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <ul className="nav-menu">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/'>Truck Service</NavLink></li>
        <li><NavLink to='/'>About</NavLink></li>
        <li><NavLink to='/' className="signin">Login</NavLink></li>
        <li><NavLink to='/'>Contact</NavLink></li>
      </ul>
    </div>
  )
}

export default Menu
