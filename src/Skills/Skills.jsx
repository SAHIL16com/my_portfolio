import React from "react";
import "./Skills.css";

const skills = {
  Languages: ["HTML5", "CSS3", "JavaScript", "C", "Python"],
  Frontend: ["React.js","Tailwind CSS", "Responsive Design"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Vercel"],"Currently Learning": ["Data Structures & Algorithms","Next.js","TypeScript"],
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <h2>Skills & Technologies</h2>
        <p>
          A collection of technologies, tools, and programming languages that I
          use to build modern, scalable, and responsive web applications.
        </p>
      </div>

      <div className="skills-container">

        {Object.entries(skills).map(([category, items]) => (
          <div className="skill-card" key={category}>
            <h3>{category}</h3>

            <div className="skill-tags">
              {items.map((item) => (
                <span className="skill-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;