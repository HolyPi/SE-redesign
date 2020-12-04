import React from 'react'
import noctis from '../../static/images/noctis.png'
import logo from '../../static/images/SE.png'
import './Header.css'



export default function Header() {
    return (
        <div className="hero-section">
        <div className="hero-logo"><img src={logo} alt="Logo"></img></div>
        <div className="hero-img"><img src={noctis} alt="Noctis"></img></div>
        </div>
    )
}