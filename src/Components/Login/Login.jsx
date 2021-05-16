import React, { useEffect } from 'react'
require('dotenv').config()



function Login(props) {
    const {REACT_APP_CLIENT_ID,REACT_APP_Client_secretID}=process.env;


    // const header=new Header();


    useEffect(() => {
        let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST', 'OPTIONS');

// console.log(props.location.code,REACT_APP_CLIENT_ID,REACT_APP_Client_secretID);


        fetch("https://github.com/login/oauth/access_token",
        {
            method: 'POST',
        //     // mode:"no-cors",
        //     credentials: 'include',

        //     headers: headers,
            body:{
                code:props.location.code,
                client_id:REACT_APP_CLIENT_ID,
                client_secret:REACT_APP_Client_secretID
            }
        }
        ).then(res=>res.json())
        .then(res=>console.log(res))
    })
      
    return (
        <div>
            <h1>in login</h1>
        </div>
    )
}

export default Login
