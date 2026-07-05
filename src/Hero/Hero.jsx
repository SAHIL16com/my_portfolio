import React from 'react'
import './Hero.css'
import { Dot } from 'lucide-react';
const Hero = () => {
    return (
        <div className='hero'>
            <div className="my_field">
                <p className='field_name'> <Dot /> CS Student Engineer</p>
            </div>
            <div className="hero_con">
                <h1>Hi, I'm Sahil Mishra</h1>
                <h1>Frontend Developer & Student</h1>
                <h3>I create modern, responsive, and user-friendly web applications using React, JavaScript, Tailwind CSS, and other modern web technologies.</h3>
            </div>
            <div className="buttons">
                <button className="contact_me">Contact Me</button>
                <button className="my_work">My Work</button>
            </div>
        </div>
    )
}

export default Hero
