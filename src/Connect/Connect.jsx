import React from 'react'
import './Connect.css'

const Connect = () => {
    return (
        <div id='contact' className='connect'>
            <div className="right">
                <div className="head">
                    <h2>Let's Build Something Amazing Together!</h2>
                    <p>Feel free to reach out if you have any questions or would like to collaborate!</p>
                </div>
                <div className="form">
                    <form autoComplete="on">
                        <div className="input-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Write your message..."
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <div className="left">
                <span className="name">Direct Channel</span>
                <div className="channel">
                    <span className="email">sahilkumar55126@gmail.com</span>
                    <a href="https://github.com/SAHIL16com" target="_blank" >connect on github</a>
                    <a href="https://www.linkedin.com/in/sahil-mishra-mishra-223353366/" target="_blank" >connect on linkedin</a>
                </div>
            </div>
        </div>
    )
}

export default Connect
