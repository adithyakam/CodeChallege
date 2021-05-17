import React, { useEffect } from 'react'
require('dotenv').config();



function Login(props) {
    const {REACT_APP_CLIENT_ID,REACT_APP_Client_secretID,REACT_APP_REDIRECT_URI}=process.env;

    const url="/login/oauth/access_token"
    // https://cors-anywher.heroku.com/

    useEffect(() => {


        let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*')
        headers.append('Access-Control-Allow-Credentials', "true")
        headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept')
        // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
        // headers.append('Origin','http://localhost:3000');
    
        fetch("/login/oauth/access_token",
        {
            // mode: 'no-cors',
            // credentials: 'include',
            method: 'POST',
            headers: headers,
            body:{
                code:props.location.code,
                client_id:REACT_APP_CLIENT_ID,
                client_secret:REACT_APP_Client_secretID
            }
            // body:data
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
