import React from 'react'
import './Footer.css'
import { Copyright } from 'lucide-react';
import { motion } from "motion/react";

const Footer = () => {
    return (
        <motion.div
            className='footer'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <motion.div
                className="company"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
            >
                <Copyright size={20} />
                <p>2026 Sahil Mishra. All rights reserved.</p>
            </motion.div>

            <motion.div
                className="links"
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
            >
                <a
                    href="https://github.com/SAHIL16com"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/sahil-mishra-mishra-223353366/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>

                <a
                    href="https://wa.me/919582352683?text=Hello%20Sahil,%20I%20want%20to%20contact%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contact Me
                </a>
            </motion.div>
        </motion.div>
    )
}

export default Footer