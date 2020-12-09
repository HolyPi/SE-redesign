
import React from 'react';
import Highlights from './Sq-hl/Sq-hl';
import './POPOSList.css'
import data from './highlights-data.json'

function HL() {
    const spaces = data.map(({ title, images }, i) => {
      return (
        <Sq-hl
          name={title}
          images={images[0]}
        />
      )
    })
      return (
          <div className="Hl">
              { spaces }
          </div>
      )
  }
  
  export default HL;