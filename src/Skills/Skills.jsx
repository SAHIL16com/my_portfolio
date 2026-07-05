import React from "react";
import "./Skills.css";
import { motion } from "motion/react";

const skills = {
  Languages: ["HTML5", "CSS3", "JavaScript", "C", "Python"],
  Frontend: ["React.js", "Tailwind CSS", "Responsive Design"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],
  "Currently Learning": [
    "Data Structures & Algorithms",
    "Next.js",
    "TypeScript",
  ],
};

const Skills = () => {
  return (
    <motion.section
      className="skills"
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>Skills & Technologies</h2>
        <p>
          A collection of technologies, tools, and programming languages that I
          use to build modern, scalable, and responsive web applications.
        </p>
      </motion.div>

      <div className="skills-container">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            className="skill-card"
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <h3>{category}</h3>

            <div className="skill-tags">
              {items.map((item) => (
                <span className="skill-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;