import React from 'react'
import noctis from '../../static/images/noctis.png'
import logo from '../../static/images/SE.png'
import './Header.css'



export default function Header() {
    return (
        <div className="hero-section">
        <div className="hero-figure"></div>
        <div className="fading">
        <div className="hero-img"><img src={noctis} alt="Noctis"></img></div>
        </div>
        <div className="hero-logo"><img src={logo} alt="Logo"></img></div>
        </div>
    )
}