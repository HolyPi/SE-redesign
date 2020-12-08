import React from 'react'
import './Hlheader.css'
import sb from '../../static/images/Sharp.png'

export default function Hlheader() {
    return (
        <div className="hl-container">
            <h3>Highlights</h3>
            <div className="hlheader">
            <div className="hlobj">
                <img src={sb}></img>
            <div className="hlgl">
            </div>

            </div>
            </div>
        
        </div>

 
    )
}