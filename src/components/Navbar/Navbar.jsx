import React from 'react'
import Toggle from '../Toggle/Toggle'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='n__wrapper'>
        <div className="n__left">
            <h1>Elbarody</h1>
            <Toggle></Toggle>
        </div>
        <div className="n__right">
            <div className="n__list">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonial</li>
                </ul>
            </div>
            <button className='button n__button'>Contact</button>
        </div>
    </div>
  )
}

export default Navbar
