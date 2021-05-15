import React from 'react'

import {ReactComponent as LogoFooter} from "../../assest/Vector.svg"

import {ReactComponent as Group} from "../../assest/Group 1313.svg"


import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="footer1">
                <div className="footer1__image">
                <LogoFooter/>
                <h1>ORIZON</h1>
                </div>
                <h3>Orizon Technologies Ltd</h3>
                <p> 
                Ruko Jalur Sutera 29A No. 53
                </p>
                <p>
                Alam Sutera Serpong, Tangerang 15323
                </p>
            </div>
            <div className="footer2">
                <h3>Contact</h3>
                <p>
                Phone : +62.21.5314.1135
                </p>
                <p>
                Fax : +62.21.5314.1135
                </p>
                <p>
                Email : community@orizon.com
                </p>
            </div>
            <Group/>
        </div>
    )
}

export default Footer
