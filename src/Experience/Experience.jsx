import React from "react";
import "./Experience.css";
import { Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <div id="experience">
            <h2 className="section_title">Experience</h2>
            <div className="section_line"></div>
            <p className="section_description">
                Real-world industry experience — where I applied my skills and grew as a developer.
            </p>
            <div className="experience_container">
                <div className="experience_card">
                    <div className="experience_content">
                        <div className="experience_header">
                            <div className="company_logo">
                                <div className="logo_container">
                                    <span className="logo_text">B</span>
                                </div>
                            </div>
                            <div className="company_info">
                                <div className="company_name">Blueve Tech</div>
                                <div className="job_role">
                                    MERN Stack Developer Intern
                                </div>
                                <div className="job_duration">
                                    <Calendar size={16} />
                                    <span>Feb 2026 – Apr 2026 · 2 Months </span>
                                </div>
                                <div className="job_type">
                                    Internship · Remote
                                </div>
                            </div>
                            <div className="status_badge">
                                Completed
                            </div>
                        </div>
                        <p className="experience_description">
                            Built and maintained full-stack web applications using the
                            <strong> MERN stack</strong> — MongoDB, Express.js,
                            React.js and Node.js. Worked on real client projects,
                            developed REST APIs, implemented JWT authentication,
                            and contributed to responsive front-end interfaces.
                        </p>
                        <div className="skills_container">
                            <div className="skill_card">
                                <div className="skill_icon">⚛️</div>
                                <div>
                                    <div className="skill_title">
                                        React.js UI Development
                                    </div>
                                    <div className="skill_description">
                                        Built interactive dashboards and component libraries
                                    </div>
                                </div>
                            </div>
                            <div className="skill_card">
                                <div className="skill_icon">🔌</div>

                                <div>
                                    <div className="skill_title">
                                        REST API Integration
                                    </div>
                                    <div className="skill_description">
                                        Designed and consumed Express.js + Node.js APIs
                                    </div>
                                </div>
                            </div>
                            <div className="skill_card">
                                <div className="skill_icon">🗄️</div>
                                <div>
                                    <div className="skill_title">
                                        MongoDB Database
                                    </div>
                                    <div className="skill_description">
                                        Schema design, queries and Mongoose integration
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="technology_stack">
                            <span className="tech_tag">MongoDB</span>
                            <span className="tech_tag">Express.js</span>
                            <span className="tech_tag">React.js</span>
                            <span className="tech_tag">Node.js</span>
                            <span className="tech_tag">Mongoose</span>
                            <span className="tech_tag">Git</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;