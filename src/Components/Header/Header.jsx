import React from 'react'

import "./Header.css"

import {ReactComponent as Logo} from "../../assest/Vector.svg"
import {ReactComponent as Home} from "../../assest/Union.svg"
import {ReactComponent as Mail} from "../../assest/mail.svg"
import {ReactComponent as Shuffle} from "../../assest/shuffle.svg"
import {ReactComponent as Downarrow} from "../../assest/chevron_down.svg"


function Header() {
    return (<>
        <div className="header">
            <div className="header__logoContainer">
                <Logo/>
                <h1>ORIZON</h1>
            </div>
            <div className="header__routecontainer">
                <h3>Services</h3>
                <h3>Product</h3>
                <h3>Technology</h3>
                <div className="header__routeArrowContainer">
                <h3>About</h3>
                <Downarrow/>
                </div>
                <div className="header__routeArrowContainer">
                <h3>Client</h3>
                <Downarrow/>
                </div>
                <h3>Login</h3>
            </div>

            <div className="Header__logoContainer">
                <Home/>
                <Mail/>
                <Shuffle/>
            </div>

        </div>
        <div className="hearder__border">

        </div>
        </>
    )
}

export default Header
