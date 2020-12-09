import React from 'react'
import './Sq-hl.css'
import nr from '../../static/images/games/nr.jpg'
import ff from '../../static/images/games/ffxvi.png'
import khmom from '../../static/images/games/khmom.jpg'
import dq from '../../static/images/games/dg.png'




export default function Highlights() {
    return (

            <section class="game-section">
                <div className="games">
                <div className="wrap">
                <div className="game-img">
                <img src={khmom}/>
                </div>
                <div className="game-n">
                <h5>Kingdom Hearts: Melody of Memory</h5>
                </div>
                </div>
                <div className="wrap">
                <div className="game-img">
                <img src={dq}/>
                </div>
                <div className="game-n">
                <h5>Dragon Quest XI</h5>
                </div>
                </div>
                <div className="wrap">
                <div className="game-img">
                <img src={ff}/>
                </div>
                <div className="game-n">
                <h5>Final Fantasy XVI</h5>
                </div>
                </div>
                <div className="wrap">
                <div className="game-img">
                <img src={nr}/>
                </div>
                <div className="game-n">
                <h5>NieR Replicant ver.1.22474487139</h5>
                </div>
                </div>
                </div>
                </section>

            
    )
}