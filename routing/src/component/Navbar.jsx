import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <div>
      <ul>
        <li>
            <NavLink to='/'
            className={({isActive})=> isActive ? "active-link":""}
            >Homepage</NavLink>
        </li>
        <li>
            <NavLink to='/about'
            className={({isActive})=> isActive ? "active-link":""}
            >Aboutpage</NavLink>
        </li>
        <li>
            <NavLink to='/dashboard'
            className={({isActive})=> isActive ? "active-link":""}
            >Dashboardpage</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar