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
import { useEffect, useState } from "react";
const App = () => {

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div>
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme} />
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
