import React from 'react'

import "./Hero.css" 

import {ReactComponent as HeroImage} from "../../assest/pana.svg"

function Hero() {


    return (
        <div className="Hero">
           <div className="Hero__content">
            <h1 >Making the most of the ever-growing <span>Information Technology</span></h1>
            <p>managed by a team of professional experts with extensive experience and impressive track records</p>
            <button>Read More</button>
           </div>
           <HeroImage className="Hero__image"/>
        </div>
    )
}

export default Hero
