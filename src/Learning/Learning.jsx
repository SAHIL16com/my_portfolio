import React from 'react'
import './Learning.css'
import mern from '../assets/mern.png'
import dsa from '../assets/dsa.png'
import { motion } from "motion/react";

const Learning = () => {
  return (
    <motion.div
      className='learning'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="learning_path"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>My Learning Path</h2>
        <p className="learning_description">
          What I've mastered, what I'm currently studying, and what's next on the horizon.
        </p>
      </motion.div>

      <motion.div
        className="cards-stats"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="card1"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={mern} alt="MERN Stack" />
          <h4>MERN Stack</h4>
          <p>
            Successfully completed full stack web development using MongoDB,
            Express.js, React, and Node.js.
          </p>
        </motion.div>

        <motion.div
          className="card1"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={dsa} alt="DSA" />
          <h4>DSA</h4>
          <p>
            Successfully completed full stack web development using MongoDB,
            Express.js, React, and Node.js.
          </p>
        </motion.div>
      </motion.div>

      <hr />
    </motion.div>
  )
}

export default Learning