import React from 'react'
import "./Services.css"
import heart from "../../img/heartemoji.png"
import cv from "../../img/1 (1).pdf"

const Services = () => {
    return (
        <div className='services'>
            <div className="s__left">
                <h1>My Awesome <br/> services</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam commodi esse quae libero, voluptatibus, aspernatur eos modi distinctio corrupti doloremque eligendi voluptates corporis nisi accusantium consequatur quo. Id, cupiditate perspiciatis?</p>
                <a href={cv} download >
                    <button className='button c__button'>
                        Download CV
                    </button>
                </a>
            </div>
            <div className="s__right">
                <div className="card">
                    <img src={heart} alt="" />
                    <div className="text">
                        <span>Developer</span>
                        <p>Html,Css,JS,React,Node.js</p>
                        <button className='c__button'>Learn More</button>
                    </div>
                </div>
                <div className="card" style={{left:"-4rem",top:"12rem"}}>
                    <img src={heart} alt="" />
                    <div className="text">
                        <span>Developer</span>
                        <p>Html,Css,JS,React,Node.js</p>
                        <button className='c__button'>Learn More</button>
                    </div>
                </div>
                <div className="card" style={{left: "12rem",top: "19rem"}}>
                    <img src={heart} alt="" />
                    <div className="text">
                        <span>Developer</span>
                        <p>Html,Css,JS,React,Node.js</p>
                        <button className='c__button'>Learn More</button>
                    </div>
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

export default Services
