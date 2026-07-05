import React from 'react'
import './Learning.css'
import mern from '../assets/mern.jpg'
import dsa from '../assets/dsa.jpg'
const Learning = () => {
  return (
    <div className='learning'>
        <div className="learning_path">
            <h2>My Learning Path</h2>
             <p className="learning_description">What I've mastered, what I'm currently studying, and what's next on the horizon.</p>
        </div>
        <div className="cards-stats">
            <div className="card1">
                <img src={mern} alt="MERN Stack" />
                <h4>MERN Stack</h4>
                <p>Successfully completed full stack web development using MongoDB, Express.js, React, and Node.js.</p>
            </div>
            <div className="card1">
                <img src={dsa} alt="DSA" />
                <h4>DSA</h4>
                <p>Successfully completed full stack web development using MongoDB, Express.js, React, and Node.js.</p>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Learning
