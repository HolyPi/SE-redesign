import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar2.css'

export default function Navbar2() {
    return (
        <header>
        <div className="logo-container">
            <Link id="" to="/"></Link>
        </div>
        <div className="nav">
            <ul className="nav-links2">
                <li><Link to="/">Log in / Sign Up</Link></li>
                <li><Link to="/">Wish List</Link></li>
                <li><Link to="/">Help</Link></li>
            </ul>
        </div>
    </header>
    )
}