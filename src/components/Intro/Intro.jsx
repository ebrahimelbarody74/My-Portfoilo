import React from 'react'
import imgProfile from "../../img/1670668373067-removebg-preview.png"
import "./Intro.css"
import imgGithub from "../../img/github.png"
import imgLinkedin from "../../img/linkedin.png"
import imgInstgram from "../../img/instagram.png"
import v1 from "../../img/Vector1.png"
import v2 from "../../img/Vector2.png"
import thumb from "../../img/thumbup.png"
import crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"
// import {motion} from '../../../react-motion/'


const Intro = () => {
  const transition={duration:2,type:'spring'}
  return (
    <div className="intro">
        <div className="i__left">
            <h1>Hy! Am</h1>
            <span>Ebrahim Elbarody</span>
            <p>Frontend Developer with high level of experience in development and producing the Quality work </p>
            <button className='button i__button'>Here me</button>
            <div className="i__social">
                <a href="">
                <img src={imgGithub} alt="" />
                </a>
                <a href="">
                <img src={imgLinkedin} alt="" />
                </a>
                <a href="">
                <img src={imgInstgram} alt="" />
                </a>
            </div>
        </div>
        <div className="i__right">
            <img src={v1} className="v1" alt="" />
            <img src={v2} className="v2" alt="" />
            <img src={imgProfile} className="body" alt="" />
            <img
            initial={{left:'-36%'}}
            whileInView={{left:'-24%'}}
            src={glassesimoji} className="moji" alt="" />
            <div className="crown">
                <img src={crown} alt="" />
                <span>
                    web
                    <br/>Developer
                </span>
            </div>
            <div className="thumb">
                <img src={thumb}  alt="" />
                <span>
                    Frontend
                    <br/>Developer
                </span>
            </div>
            <div className="blur"></div>
            <div className="blur" style={{background:"#c1f5ff",top:"17rem",
        width:"21rem",
        height:"11rem",
        left:"-9rem"
        }}></div>
        </div>
    </div>
  )
}

export default Intro
