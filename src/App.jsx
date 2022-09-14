import React, { useState } from 'react'
import './App.scss'
import SlideCarousel from './components/SlideCarousel'
import Navbar from './components/Navbar'
import NavToggler from './components/NavToggler'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [showNav, setShowNav] = useState(false)

  return (
    <>
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
    </>
  )
}