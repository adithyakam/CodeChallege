import React from 'react'

import "./ProductAndServices.css"

import {ReactComponent as Product} from "../../assest/product.svg"
import {ReactComponent as Verfied} from "../../assest/verified 1.svg"
import {ReactComponent as CogWheel} from "../../assest/cogwheel 1.svg"


function ProductAndServices() {
    return (
        <div className="productServices">
                <h1>Product and Services</h1>
                <div className="productServices__ProductContainer">
                    <div className="productServices__product">                
                        <Product/>
                        <h6>Our Product</h6>   
                        <p>
                        Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.
                        </p>
                        <button>
                            Read More
                        </button>
                    </div>
                    <div className="productServices__product">
                        <Verfied/>
                        <h6>Our Services</h6>
                        <p>
                        DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.
                        </p>
                        <button>
                            Read More
                        </button>
                    </div>
                    <div className="productServices__product">
                        <CogWheel/>
                        <h6>Our Technology</h6>
                        <p>
                        First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.                        </p>
                        <button>
                            Read More
                        </button>
                    </div>
                </div>
        </div>
    )
}

export default ProductAndServices
