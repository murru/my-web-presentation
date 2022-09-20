import React, { useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
import SlideCarousel from './components/SlideCarousel'
import Navbar from './components/Navbar'
import NavToggler from './components/NavToggler'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.scss'

export default function App() {
  const [theme, setTheme] = useState('light')
  const [showNav, setShowNav] = useState(false)

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={ { theme, toggleTheme }}>
      <div id={theme}>
        {/* Engineer images carousel */}
        <SlideCarousel mobile={ false } />

        {/* Navbar */}
        <Navbar showNav={ showNav } setShowNav={ setShowNav } />

        {/* Page Content */}
        <div className="content">

          {/* Navbar Toggler */}
          <NavToggler showNav={ showNav } setShowNav={ setShowNav } />

          {/* Header */}
          <Header />

          {/* About me */}
          <AboutMe />

          {/* Portfolio */}
          <Portfolio />

          {/* Skills */}
          <Skills />

          {/* Contact */}
          <Contact />
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}