import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import Repo from '../Repo/Repo';



import "./Login.css"

require('dotenv').config();

const axios = require('axios');



function Login(props) {

  const history=useHistory()
    const [token, settoken] = useState("")

    const [data, setdata] = useState([])

    const {REACT_APP_CLIENT_ID,REACT_APP_Client_secretID}=process.env;

    useEffect(() => {

      if(!props.location.code){
        history.push('/')
      }

        axios({
            method: 'post',
            url: "/login/oauth/access_token",
            data: {
                code:props.location.code,
                client_id:REACT_APP_CLIENT_ID,
                client_secret:REACT_APP_Client_secretID
            }
          }).then(res=>{
            
            let dummy =res.data.split('&')
            let dummy2=dummy[0].split('=')
            settoken(dummy2[1])
           
          })

    },[])

    useEffect(() => {
      axios.get('/user/repos' , { headers: {"Authorization" : `Bearer ${token}`} })
      .then(res=>setdata(res.data))
     

    }, [token])
      

    return (
        <div className="login">
            <h1>Repos</h1>
            <div className={`login__Repo ${data.length?"min":"max"}`}>
              {
                data.length?(
                    data.map(ele=>(
                        <Repo key={ele.id} ele={ele}/>
                    ))


                ):(
                  <h1>No Repository</h1>
                )
              }
            </div>
        </div>
    )
}

export default Login
