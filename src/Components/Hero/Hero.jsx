import React, { useEffect, useState } from 'react'

import "./Hero.css" 

import {ReactComponent as HeroImage} from "../../assest/pana.svg"
import {ReactComponent as Image2} from "../../assest/Image2.svg"

function Hero() {

    const [inc, setInc] = useState(1)

    const changeLeft=()=>{
        console.log('l');
        // --inc
        setInc(inc-1)
        if(inc==1){
            setInc(1)
        }

    }

    const changeRigth=()=>{
        console.log('r');
        setInc(inc+1)
        if(inc==2){
            setInc(2)
        }

    }


    useEffect(()=>{console.log(inc);},[inc])


// console.log(inc);
    return (<>
        <div className='HeroCarousal'>
        <div className={`Hero ${(inc===1)?(''):("car")}`}>
           <div className="Hero__content">
            <h1 >Making the most of the ever-growing <span>Information Technology</span></h1>
            <p>managed by a team of professional experts with extensive experience and impressive track records</p>
            <button>Read More</button>
           </div>
           <HeroImage className="Hero__image"/>
        </div>
        <div className={`Hero ${(inc===2)?"":"car"}`}>
                <div className='Hero__content'>
                <h1>Welcome to <span>Orizon <br/>Technologies</span></h1>
                            <p>
                             Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the   ever-growing information technology through <span>DSI</span>’s distinct front-end based application concept.
                            </p>
                            <p>
                             Managed by a team of professional experts with extensive experience and impressive track records, <span>DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.
                            </p>
                </div>
                <Image2 className="Hero__image"/>
        </div>
        <h1 className="arrow left" onClick={changeLeft}>Arrowleft</h1>
        <h1 className="arrow Rigth" onClick={changeRigth}>Arrowrigth</h1>
        </div>
        
</>

    )
}

export default Hero
