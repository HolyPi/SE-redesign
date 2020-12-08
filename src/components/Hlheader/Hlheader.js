import React from 'react'
import './Hlheader.css'
import log from '../../static/images/logo.png'
import gl from '../../static/images/gloria2.png'

export default function Hlheader() {
    return (
        <div className="hl-container">
            <h3>Highlights</h3>
            <div className="hlheader">
            <img src={log} class="logo"></img>
            <img src={gl} class="hlg"></img>
           
            </div>
        </div>

 
    )
}