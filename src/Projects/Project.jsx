import React from 'react'
import "./Project.css";
import gemini from "../assets/gemini.png";
import { motion } from "motion/react";

const Project = () => {
    return (
        <motion.section
            className="projects"
            id="projects"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
        >
            <motion.div
                className="project-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <p>My Work</p>
                <h2>Featured Project</h2>
            </motion.div>

            <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <motion.div
                    className="project-image"
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <img src={gemini} alt="Gemini AI Clone" />
                </motion.div>

                <motion.div
                    className="project-content"
                    initial={{ x: 60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h3>Gemini AI Clone</h3>

                    <p>
                        A modern AI chatbot built using React and Gemini API.
                        It provides real-time AI responses with a clean and
                        responsive interface inspired by Google's Gemini.
                    </p>

                    <div className="tech-stack">
                        <span>React</span>
                        <span>JavaScript</span>
                        <span>CSS</span>
                        <span>Gemini API</span>
                    </div>

                    <div className="features">
                        <h4>Features</h4>
                        <ul>
                            <li>Real-time AI Responses</li>
                            <li>Chat History</li>
                            <li>Responsive Design</li>
                            <li>Typing Animation</li>
                            <li>Modern UI</li>
                        </ul>
                    </div>

                    <div className="project-buttons">
                        <a
                            href="https://own-ai-one.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>

                        <a
                            href="https://github.com/SAHIL16com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Project;