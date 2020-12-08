import React from 'react'
import noctis from '../../static/images/Cloud2.png'
import logo from '../../static/images/bc.png'
import './Header.css'



export default function Header() {
    return (
        <div className="hero-section">
        <div className="hero-figure"></div>
        <div className="hero-img"><img src={noctis} alt="Noctis"></img></div>
        <div className="hero-logo"><img src={logo} alt="Logo"></img></div>
        </div>
    )
}