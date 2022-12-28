import React from 'react'
import Wave from "../../img/wave.png"
import "./Footer.css"
import Insta from "@iconscout/react-unicons/icons/uil-instagram" 
import Facebook from "@iconscout/react-unicons/icons/uil-facebook" 
import Github from "@iconscout/react-unicons/icons/uil-github" 
const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width:"100%"}}/>
        <div className="text">
            <span>ebrahim@gamil.com</span>
            <div className="icons">
                <Insta color="white" size="3rem"/>
                <Facebook color="white" size="3rem"></Facebook>
                <Github color="white" size="3rem"/>
            </div>
        </div>
    </div>
  )
}

export default Footer
