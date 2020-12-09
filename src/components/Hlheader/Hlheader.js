import React from 'react'
import './Hlheader.css'
import { useEffect, useState } from "react"
import log from '../../static/images/3.png'
import gl from '../../static/images/gloria2.png'

export default function Hlheader() {
        const [offsetY, setOffset] = useState(0)
        useEffect(() => {
          function handleScroll() {
            setOffset(window.pageYOffset)
          }
          window.addEventListener("scroll", handleScroll)
          return () => {
            window.removeEventListener("scroll", handleScroll)
          }
        }, [])
      
    return (
        <div className="hl-container">
            <h3>Store Highlights</h3>
            <div className="hlheader" style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>
            <img src={log} class="logo" style={{ transform: `translateY(-${offsetY * 0.5}px)` }}></img>
            <img src={gl} class="hlg" ></img>
            </div>
        </div>

 
    )
}