import React from 'react'
import './Connect.css'
import { toast } from 'react-hot-toast';
import { motion } from "motion/react";

const Connect = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "e3af8b16-15b7-4976-971f-ed9d47bc84b2");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Thank you for your submission!");
                event.target.reset();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <motion.div
            id="contact"
            className="connect"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <motion.div
                className="right"
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <div className="head">
                    <h2>Let's Build Something Amazing Together!</h2>
                    <p>
                        Feel free to reach out if you have any questions or
                        would like to collaborate!
                    </p>
                </div>

                <div className="form">
                    <form onSubmit={onSubmit} autoComplete="on">
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
            </motion.div>

            <motion.div
                className="left"
                initial={{ x: 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <span className="name">Direct Channel</span>

                <div className="channel">
                    <span className="email">
                        sahilkumar55126@gmail.com
                    </span>

                    <a
                        href="https://github.com/SAHIL16com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Connect on GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sahil-mishra-mishra-223353366/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Connect on LinkedIn
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Connect;