import React from 'react'
import './Footer.css'
import { Copyright } from 'lucide-react';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="company">
                <Copyright size={20} />
                <p>2025 My Company. All rights reserved.</p>
            </div>
            <div className="links">
                <a href="https://github.com/SAHIL16com">GitHub</a>
                <a href="https://www.linkedin.com/in/sahil-mishra-mishra-223353366/">LinkedIn</a>
                <a
                    href="https://wa.me/919582352683?text=Hello%20Sahil,%20I%20want%20to%20contact%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                > Contact Me </a>
            </div>
        </div>
    )
}

export default Footer
