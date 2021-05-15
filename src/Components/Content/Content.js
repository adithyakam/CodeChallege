import React from 'react'

import "./Content.css"
import {ReactComponent as Image2} from "../../assest/Image2.svg"

function Content() {
    return (
        <div className="content">
            <div className="content__Container">
                        <Image2 className="content__Img"/>
                        <div className="content__textContainer">
                            <h1>Welcome to <span>Orizon <br/>Technologies</span></h1>
                            <p>
                             Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the   ever-growing information technology through <span>DSI</span>’s distinct front-end based application concept.
                            </p>
                            <p>
                             Managed by a team of professional experts with extensive experience and impressive track records, <span>DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.
                            </p>
                        </div>
                    </div>
        </div>

        
    )
}

export default Content
