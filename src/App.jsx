import React from 'react'
import Navbar from './Navbar/Navbar.jsx'
import Hero from './Hero/Hero.jsx'
import About from './About/About.jsx'
import Experience from './Experience/Experience.jsx'
import Footer from './Footer/Footer.jsx'
import Connect from './Connect/Connect.jsx'
import Learning from './Learning/Learning.jsx'
import Skills from './Skills/Skills.jsx'
import Projects from './Projects/Project.jsx'
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <div>
      <Toaster/>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Learning/>
      <Connect/>
      <Footer/>
    </div>
  )
}

export default App
