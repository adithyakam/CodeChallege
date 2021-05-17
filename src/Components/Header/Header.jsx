import React, { useEffect, useState } from 'react'

import "./Header.css"

import {ReactComponent as Logo} from "../../assest/Vector.svg"
import {ReactComponent as Home} from "../../assest/Union.svg"
import {ReactComponent as Mail} from "../../assest/mail.svg"
import {ReactComponent as Shuffle} from "../../assest/shuffle.svg"
import {ReactComponent as Downarrow} from "../../assest/chevron_down.svg"
import {ReactComponent as HamBurger} from "../../assest/hamburger.svg"

import { useHistory } from 'react-router'
import OauthPopup from 'react-oauth-popup'




 

function Header() {
    const {REACT_APP_CLIENT_ID,REACT_APP_REDIRECT_URI}=process.env;
    const _url=`https://github.com/login/oauth/authorize?scope=user&client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}`
    const history =useHistory();

    const [toggle, settoggle] = useState(true)


    const [code, setcode] = useState("")


    const onClosed = () => {
        // console.log("closed!")
    };
    const onCode = (code, params) => {
                // window.close();
                setcode(code);

              }
        
    useEffect(() => {
      if(code){
          history.push({
            pathname: '/',
            code:code,
          })
      }
    }, )


    const openHam=(e)=>{
        e.preventDefault();
        settoggle(!toggle)
    }
    

    return (<>
        <div className="header">
            <div className="header__logoContainer">
                <Logo/>
                <h1>ORIZON</h1>
            </div>
            <div className={`header__routecontainer  ${toggle?'showDrop': 'hideDrop'}`}>
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
                {/* <h3 onClick={()=>popupSignIn}>Login</h3> */}
                {/* <a href={_url} >Login</a> */}
                <OauthPopup
                url={_url}
                onCode={onCode}
                onClose={onClosed}
                // onclick={ref(this)}
                >
                <h3>Login</h3>
                </OauthPopup>
            </div>

            <div className={`Header__logoContainer mobileD`}>
                <Home/>
                <Mail/>
                <Shuffle/>
            </div>
            <HamBurger className={`Header__hamburer`}onClick={openHam}/>
        </div>
        <div className="hearder__border">

        </div>
        </>
    )
}

export default Header
