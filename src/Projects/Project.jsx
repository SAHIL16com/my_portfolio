import React, { useState, useEffect } from 'react'
import "./Project.css";
import gemini from "../assets/gemini.png";
import tomato from "../assets/tomato.png";
import { motion } from "motion/react";

const CountdownTimer = () => {
    // Set target date to exactly 2 days from July 11, 2026, 15:00:00 local time
    const targetDate = new Date("2026-07-13T15:00:00").getTime();
    
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;
        
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num) => String(num).padStart(2, '0');

    return (
        <span className="timer-countdown">
            {timeLeft.days}d {formatNumber(timeLeft.hours)}h {formatNumber(timeLeft.minutes)}m {formatNumber(timeLeft.seconds)}s
        </span>
    );
};

const projectsData = [
    {
        title: "Gemini AI Clone",
        image: gemini,
        description: "A modern AI chatbot built using React and Gemini API. It provides real-time AI responses with a clean and responsive interface inspired by Google's Gemini.",
        techStack: ["React", "JavaScript", "CSS", "Gemini API"],
        features: [
            "Real-time AI Responses",
            "Chat History",
            "Responsive Design",
            "Typing Animation",
            "Modern UI"
        ],
        liveLink: "https://own-ai-one.vercel.app/",
        githubLink: "https://github.com/SAHIL16com",
        isWorkInProgress: false
    },
    {
        title: "Food Delivery App",
        image: tomato,
        description: "A premium, full-stack food delivery application built from scratch. Features an interactive checkout flow, search autocomplete, real-time order tracking, and beautiful animated elements.",
        techStack: ["React", "Node.js", "Express", "MongoDB"],
        features: [
            "Interactive Menu & Cart",
            "Stripe Payment Gateway",
            "Admin Dashboard",
            "Live Order Tracking",
            "Search & Filter Options"
        ],
        liveLink: "#",
        githubLink: "https://github.com/SAHIL16com",
        isWorkInProgress: true
    }
];

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
                <div className="heading-title-container">
                    <h2>Featured Projects</h2>
                    <span className="coming-soon-badge">
                        <span className="pulse-dot"></span>
                        3 Full Stack Projects Coming Soon
                    </span>
                </div>
            </motion.div>

            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
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
                            <img src={project.image} alt={project.title} />
                        </motion.div>

                        <motion.div
                            className="project-content"
                            initial={{ x: 60, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="tech-stack">
                                {project.techStack.map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                            </div>

                            <div className="features">
                                <h4>Features</h4>
                                <ul>
                                    {project.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-buttons">
                                {project.isWorkInProgress ? (
                                    <div className="wip-badge">
                                        Work in Progress: <CountdownTimer />
                                    </div>
                                ) : (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Live Demo
                                    </a>
                                )}

                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Project;