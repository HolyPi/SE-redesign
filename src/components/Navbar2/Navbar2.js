import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar2.css'
import slogo from '../../static/images/smicon.png'

export default function Navbar2() {
    return (
        <header>
        <div className="nav">
        <img src={slogo} alt="logo"></img>
            <ul className="nav-links2">
                <li><Link to="/">Log in / Sign Up</Link></li>
                <li><Link to="/">Wish List</Link></li>
                <li><Link to="/">Help</Link></li>
            </ul>
        </div>
    </header>
    )
}