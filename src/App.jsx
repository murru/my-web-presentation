import React, { useState } from 'react'
import wedding from './assets/wedding.jpg'
import rocks from './assets/rocks.jpg'
import sailBoat from './assets/sailboat.jpg'
import underWater from './assets/underwater.jpg'
import chef from './assets/chef.jpg'
import p6 from './assets/p6.jpg'
import avatarSmoke from './assets/avatar_smoke.jpg'
import bandMember from './assets/bandmember.jpg'
import avatarG2 from './assets/avatar_g2.jpg'
import Navbar from './components/Navbar'
import './App.scss'
import SlideCarousel from './components/SlideCarousel'
import Introduction from './components/Introduction'
import ThemeButton from './components/ThemeButton'
import LangSelector from './components/LangSelector'

export default function App() {
  const [showNav, setShowNav] = useState(false)
  const [showLangs, setShowLangs] = useState(false)
  const [lang, setLang] = useState('en')
  const [theme, setTheme] = useState('light')
  function toggleNavbar() {
    setShowNav(!showNav)
  }

  return (
    <>
      {/* Engineer images carousel */}
      <SlideCarousel mobile={ false } />

      {/* Navbar */}
      <Navbar showNav={ showNav } setShowNav={ setShowNav } />

      {/* Page Content */}
      <div className="content">

        {/* Navbar Toggler */}
        <div className="content__nav-toggle">
          <span className="button" onClick={ () => toggleNavbar() }>
            <i className="fa-solid fa-bars"></i>
          </span><br />
          <ThemeButton
            theme={ theme }
            setTheme={ setTheme }
          /><br />
          <LangSelector
            showLangs={ showLangs }
            setShowLangs={ setShowLangs }
            lang={ lang }
            setLang={ setLang }
          />
        </div>

        {/* Header */}
        <header id="home" className="content__header">
          <h1 className="my-name">Ernesto Murrugarra</h1>
          <p>Informatics & Software Engineer</p>

          {/* Mobile carousel */}
          <SlideCarousel mobile={ true } />
          
          {/* Download resume btn */}
          <button className="resume-btn">
            <i className="fa fa-download"></i> Download Resume
          </button>
        </header>

        {/* About me */}
        <div id="aboutMe" className="content__testimonials">
          <h2>About Me</h2>
          <hr className="w3-opacity" />
          <Introduction />
        </div>

        {/* Testimonials */}
        <div id="testimonials" className="content__testimonials">
          <h2>Testimonials</h2>
          <hr className="w3-opacity" />
          <img src={ avatarSmoke } alt="Avatar" className="testimonial-avatar" />
          <p><span className="testimonial-name-position">Chandler Bing</span> Web Designer.</p>
          <p>Jane Doe is just awesome. I am so happy to have met her!</p><br />

          <img src={ bandMember } alt="Avatar" className="testimonial-avatar" />
          <p><span className="testimonial-name-position">Chris Fox</span> CEO at Mighty Schools.</p>
          <p>Jane Doe saved us from a web disaster.</p><br />

          <img src={ avatarG2 } alt="Avatar" className="testimonial-avatar" />
          <p><span className="testimonial-name-position">Rebecca Flex</span> CEO at Company.</p>
          <p>No one is better than Jane Doe.</p><br />

          {/* Exp meta data */}
          <div className="counters">
            <div className="counters__item">
              <span className="w3-xlarge">14+</span><br />
              Partners
            </div>
            <div className="counters__item">
              <span className="w3-xlarge">55+</span><br />
              Projects Done
            </div>
            <div className="counters__item">
              <span className="w3-xlarge">89+</span><br />
              Happy Clients
            </div>
            <div className="counters__item">
              <span className="w3-xlarge">150+</span><br />
              Meetings
            </div>
          </div>
        </div>

        {/* Showcase */}
        <div id="showcase" className="content__portfolio">
          <h2 className="w3-text-grey">Showcase</h2>
          <hr className="w3-opacity" />

          {/* Grid for photos */}
          <div className="photos-grid">
            <div className="photos-grid__half">
              <a href="https://fttalent.work" target="_blank">
                <img src={ wedding } alt="" />
              </a>
              <a href="https://fttalent.work" target="_blank">
                <img src={ rocks } alt="" />
              </a>
              <a href="https://fttalent.work" target="_blank">
                <img src={ sailBoat } alt="" />
              </a>
            </div>

            <div className="photos-grid__half">
              <a href="https://fttalent.work" target="_blank">
                <img src={ underWater } alt="" />
              </a>
              <a href="https://fttalent.work" target="_blank">
                <img src={ chef } alt="" />
              </a>
              <a href="https://fttalent.work" target="_blank">
                <img src={ wedding } alt="" />
              </a>
              <a href="https://fttalent.work" target="_blank">
                <img src={ p6 } alt="" />
              </a>
            </div>
            {/* End photo grid */}
          </div>
        {/* End Portfolio Section */}
        </div>

        {/* Portfolio */}
        <div id="portfolio" className="content__portfolio">
          <h2 className="w3-text-grey">My Portfolio</h2>
          <hr className="w3-opacity" />

          {/* Grid for photos */}
          <div className="photos-grid">
            <div className="photos-grid__half">
              <a href="https://fttalent.work" target="_blank">
                <img src={ wedding } alt="" />
              </a>
              <a href="https://fttalent.work" target="_blank">
                <img src={ rocks } alt="" />
              </a>
              <a href="https://fttalent.work" target="_blank">
                <img src={ sailBoat } alt="" />
              </a>
            </div>

            <div className="photos-grid__half">
              <a href="https://fttalent.work" target="_blank">
                <img src={ underWater } alt="" />
              </a>
              <a href="https://fttalent.work" target="_blank">
                <img src={ chef } alt="" />
              </a>
              <a href="https://fttalent.work" target="_blank">
                <img src={ wedding } alt="" />
              </a>
              <a href="https://fttalent.work" target="_blank">
                <img src={ p6 } alt="" />
              </a>
            </div>
            {/* End photo grid */}
          </div>
        {/* End Portfolio Section */}
        </div>

        {/* Skills */}
        <div id="skills" className="content__skills">
          <h2>Skills</h2>
          <hr className="w3-opacity" />
        </div>

        {/* Contact */}
        <div id="contact" className="content__contact">
          <h2>Contact Me</h2>
          <hr className="w3-opacity" />
        </div>  
        
        {/* Footer */}
        <footer className="content__footer">
          <div className="rrss">
            <a href="https://www.instagram.com/garramurru/" target="_blank">
              <i className="fa fa-instagram w3-hover-opacity"></i>
            </a>
            <a href="https://twitter.com/Murru90" target="_blank">
              <i className="fa fa-twitter w3-hover-opacity"></i>
            </a>
            <a href="https://www.linkedin.com/in/murrugarra/" target="_blank">
              <i className="fa fa-linkedin w3-hover-opacity"></i>
            </a>
          </div>
          <p className="w3-medium">Developed by Eng. Ernesto Murrugarra</p>
          <p className="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" className="w3-hover-text-green" rel="noreferrer">w3.css</a> & <a href="https://fontawesome.com/" target="_blank" className="w3-hover-text-green" rel="noreferrer">Fontawesome</a></p>
        </footer>
      </div>
    </>
  )
}