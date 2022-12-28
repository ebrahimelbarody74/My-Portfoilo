import React from 'react'
import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from "@iconscout/react-unicons/icons/uil-moon"
import "./Toggle.css"
import { useContext } from 'react'
import { darkMod, themeContext } from '../../Context'
import { useDispatch, useSelector } from 'react-redux'
const Toggle = () => {

//     const theme=useContext(themeContext)
//   const darkMode=theme.state.darkMode
const effect=(e)=>{
    document.querySelectorAll(".a").forEach((e)=>{
        
        e.style.display="block"
    })
    if(e==="moon"){
        document.querySelector(".t__button").style.left="55%"
        document.querySelector(".App").style.backgroundColor="black"
        document.querySelector(".App").style.color="white"
        // theme.dispatch({type:"toggle"})
    }else{
        // theme.dispatch({type:"toggle"})
        document.querySelector(".t__button").style.left="4px"
        document.querySelector(".App").style.backgroundColor="white"
        document.querySelector(".App").style.color="black"
    }
    document.querySelector(`.${e}`).style.display="none"
  }
  return (
    <div className='toggle'>
        <Sun className="sun a" onClick={()=>{effect("sun")}} ></Sun>
        <Moon  className="moon active a" onClick={()=>{effect("moon")}}></Moon>
        <div className="t__button"></div>
    </div>
  )
}

export default Toggle
