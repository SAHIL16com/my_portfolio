import React from 'react'
import "./Project.css";
import  gemini from "../assets/gemini.png";

const Project = () => {
    return (
        <section className="projects" id="projects">
            <div className="project-heading">
                <p>My Work</p>
                <h2>Featured Project</h2>
            </div>
            <div className="project-card">
                <div className="project-image">
                    <img src={gemini} alt="Gemini AI Clone" />
                </div>
                <div className="project-content">
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
                        <a href="https://own-ai-one.vercel.app/" target="_blank"> Live Demo </a>

                        <a href="https://github.com/SAHIL16com" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
