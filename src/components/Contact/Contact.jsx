import React from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import { useRef } from 'react';
import { useState } from 'react';

const Contact = () => {
    const form =useRef();

    let [done,setDone]=useState(false)
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xopp66f', 'template_jas4uw8', form.current, '2e1i69Hwb0XngW224')
          .then((result) => {
              console.log(result.text);
              console.log(done)
              setDone(true);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='contact'>
        <div className="c__left">
            <h1>Get in touch <br/> <span>Contact me</span></h1>
        </div>
        <div className="c__right">
            <form action="" ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Name' name='user_name'/>
                <input type="email" placeholder='Email' name='user_email'/>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <button  className='button c__button'>Send</button>
                <span>{done ? "Thanks for contactin me!":""}</span>
            </form>
        </div>
        <div className="blur" style={{top: '4%',
    left: '42%'}}></div>
    <div className="blur" style={{top: '45%',
    left: '10%',background:"#c1f5ff"}}></div>
    </div>
  )
}

export default Contact
