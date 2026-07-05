import React from 'react'
import './About.css'
import image from "../assets/image.jpg";
import { MapPin } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Clock } from 'lucide-react';
import { CircleCheckBig } from 'lucide-react';
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div
      id="about"
      className="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="card"
        initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="img">
          <img src={image} alt="Sahil Mishra" />
        </div>
        <div className="name">Sahil Mishra</div>
        <div className="field">FULL STACK DEVELOPER</div>
        <div className="address">
          <MapPin size={20} /> <span>Greater , Noida - India</span>
        </div>
        <div className="email">
          <Mail size={20} /> <span>sahilkumar55126@gmail.com</span>
        </div>
        <div className="time">
          <Clock size={20} /> <span>Freesher , Available-Now</span>
        </div>
        <div className="buttons">
          <button>React</button>
          <button>MongoDb</button>
          <button>Node.js</button>
          <button>Express.js</button>
          <button>SEO</button>
        </div>
      </motion.div>

      <motion.div
        className="who"
        initial={{ x: 60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="i_am">Who' I Am</div>
        <div className="real_project">
          <CircleCheckBig size={20} />
          <span>Fresher -- activity building real world applications</span>
        </div>
        <div className="myself">
          <p>Hi, I'm <span>Sahil Mishra</span> -- a passionate Full Stack Developer based in <span>Greater Noida, India</span>. Even as a fresher, I've been relentlessly building projects that solve real problems using modern technologies.</p>
          <p>I believe the best way to learn is to build. That's why I've dived deep into <span>AI integrations</span>, and <span>educational platforms</span> — going beyond tutorials to ship complete, functional applications.</p>
          <p>I'm eager to join a team where I can contribute, grow fast, and make a real impact from day one. My code is clean, my ambition is high, and my passion for technology is unstoppable.</p>
        </div>
      </motion.div>

    </motion.div>
  )
}

export default About