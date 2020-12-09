import React from 'react'
import './Sq-hl.css'
import { Link } from 'react-router-dom'


function Highlights(props) {

    const { title, images } = props
    return (
      <div className="Hl">
        <h1>
          <h1>{title}</h1>
        </h1>
          <img src={`./${process.env.PUBLIC_URL}images/${images}`} width="300" height="300" alt="Hello" />
        </div>

    )
  }
  
  export default Highlights