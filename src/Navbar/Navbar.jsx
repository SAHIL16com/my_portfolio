import React from 'react'
import './Navbar.css'
import { FolderKanban } from 'lucide-react';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="name">Sahil Mishra</div>
      <div className="links">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#projects" aria-label="Projects">
          <FolderKanban size={20} />
        </a>
      </div>
    </div>
  )
}

export default Navbar
