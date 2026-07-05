import React from 'react'
import './Hero.css'
import { Dot } from 'lucide-react';
import { motion } from "motion/react";

const Hero = () => {
    return (
        <motion.div
            className='hero'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="my_field"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <p className='field_name'>
                    <Dot /> CS Student Engineer
                </p>
            </motion.div>

            <motion.div
                className="hero_con"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
            >
                <h1>Hi, I'm Sahil Mishra</h1>
                <h1>Frontend Developer & Student</h1>
                <h3>
                    I create modern, responsive, and user-friendly web
                    applications using React, JavaScript, Tailwind CSS,
                    and other modern web technologies.
                </h3>
            </motion.div>

            <motion.div
                className="buttons"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
            >
                <button className="contact_me">Contact Me</button>
                <button className="my_work">My Work</button>
            </motion.div>
        </motion.div>
    )
}

export default Hero