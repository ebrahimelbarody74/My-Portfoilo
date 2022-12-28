import React from 'react'
import "./Works.css"
import facebook from "../../img/Facebook.png"
import Shopify from "../../img/Shopify.png"
import fiverr from "../../img/fiverr.png"
import amazon from "../../img/amazon.png"
import Upwork from "../../img/Upwork.png"
const Work = () => {
  return (
    <div className='works'>
        <div className="w__left">
          <h1>Works for All these<br/>
          <span>Brands & Clients</span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi vero voluptates maxime! Necessitatibus a tenetur quaerat? In fuga eius eveniet libero ut, corrupti quasi. Reprehenderit quaerat incidunt possimus ipsum ratione.</p>
          <button className='button w__button'>Hire Me</button>
        </div>
        <div className="w__right">
          <div>
            <a href=""><img src={facebook} alt="" /></a>
            <a href=""><img src={Shopify} alt="" /></a>
            <a href=""><img src={amazon} alt="" /></a>
            <a href=""><img src={Upwork} alt="" /></a>
            <a href=""><img src={fiverr} alt="" /></a>
          </div>
          <div className="circle blue"></div>
          <div className="circle yellow"></div>
        </div>
    </div>
  )
}

export default Work
