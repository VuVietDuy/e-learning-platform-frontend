import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom'

function Navigaton() {
  return (
    <div className='navigation-container'>
        <p>ACCOUNT SETTING</p>
        <NavLink to={"/user"} >
            <div className='option'><span>View Profile</span></div>
        </NavLink>
        <NavLink to={"/user/edit_email"} >
            <div className='option'><span>Email Address</span></div>
        </NavLink>
        <NavLink to={"/user/edit_password"} >
            <div className='option'><span>Password</span></div>
        </NavLink>
        <div className='option'><span>Language</span></div>
        <div className='option'><span>Payment</span></div>
    </div>
  )
}

export default Navigaton