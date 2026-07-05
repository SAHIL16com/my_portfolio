import React from 'react'
import Navbar from './Navbar/Navbar.jsx'
import Hero from './Hero/Hero.jsx'
import About from './About/About.jsx'
import Experience from './Experience/Experience.jsx'
import Footer from './Footer/Footer.jsx'
import Connect from './Connect/Connect.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Experience/>
      <Connect/>
      <Footer/>
    </div>
  )
}

export default App
