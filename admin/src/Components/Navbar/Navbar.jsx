import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/JusMe-Logo.svg'
import navProfile from '../../assets/aaron-profile.png'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={navlogo} alt="" className="nav-logo" />
            <img src={navProfile} className="nav-profile" alt="Profile" />
        </div>
    )
}

export default Navbar
