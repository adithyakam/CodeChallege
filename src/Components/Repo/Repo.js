import React from 'react'

import './Repo.css'

function Repo({ele}) {

    const trim=(name)=>{
        if(name.length>10){
           return name.slice(0,10)+"..."
        }else{
            return name
        }
    }


    return (
        <div className="Repo">
            <h1>{trim(ele.name)}</h1>
            <div className="Repo__starContainer">
                <img  className="Repo_star" src="http://pngimg.com/uploads/star/star_PNG41474.png"/>
                <h3>{ele.stargazers_count}</h3>
            </div>
        </div>
    )
}

export default Repo
