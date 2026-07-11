import React, { useState } from 'react'
import './Navbar.css'
import { FolderKanban, Menu, X } from 'lucide-react';
import { motion } from "motion/react";
import { Download } from "lucide-react";
import ThemeToggleBtn from '../ThemeToggleBtn/ThemeToggleBtn.jsx';

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className='navbar'
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="name"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Sahil Mishra
      </motion.div>

      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      <motion.div
        className={`links ${isOpen ? 'active' : ''}`}
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn" onClick={() => setIsOpen(false)}>
          <Download size={18} /> Resume
        </a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        <a href="#projects" aria-label="Projects" onClick={() => setIsOpen(false)}>
          <FolderKanban size={20} />
        </a>
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
      </motion.div>
    </motion.div>
  )
}

export default Navbar