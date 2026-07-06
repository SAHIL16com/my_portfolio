import React from 'react'
import './Navbar.css'
import { FolderKanban } from 'lucide-react';
import { motion } from "motion/react";
import { Download } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import ThemeToggleBtn from '../ThemeToggleBtn/ThemeToggleBtn.jsx';
const Navbar = ({ theme, setTheme }) => {
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

      <motion.div
        className="links"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn" >
          <Download size={18} /> Resume
        </a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#projects" aria-label="Projects">
          <FolderKanban size={20} />
        </a>
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

      </motion.div>
    </motion.div>
  )
}

export default Navbar