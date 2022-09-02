import React, { useState } from 'react'
import wedding from './assets/wedding.jpg'
import rocks from './assets/rocks.jpg'
import sailBoat from './assets/sailboat.jpg'
import underWater from './assets/underwater.jpg'
import chef from './assets/chef.jpg'
import p6 from './assets/p6.jpg'
import avatarSmoke from './assets/avatar_smoke.jpg'
import profileGirl from './assets/profile_girl.jpg'
import bandMember from './assets/bandmember.jpg'
import avatarG2 from './assets/avatar_g2.jpg'
import Navbar from './components/Navbar'
import './App.scss'
import SlideCarousel from './components/SlideCarousel'

export default function App() {
  const [showNav, setShowNav] = useState(false)
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
        <span className="content__nav-toggle" onClick={ () => toggleNavbar() }>
          <i className="fa fa-bars"></i>
        </span>

        {/* Header */}
        <header id="home" className="content__header">
          <h1 className="my-name">Ernesto Murrugarra</h1>
          <p>Informatics & Software Engineer</p>

          {/* Mobile carousel */}
          <SlideCarousel mobile={ true } />
          {/* <div className="mobile-carousel">
            <img className="mobile-carousel__img" src={ profileGirl } alt="" />
          </div> */}
          
          {/* Download resume btn */}
          <button className="resume-btn">
            <i className="fa fa-download"></i> Download Resume
          </button>
        </header>

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

        {/* About */}
        <div id="about" className="content__about">
          <h2>About</h2>
          <hr className="w3-opacity" />
          <p>More than 9 years of experience developing software. I consider myself a consultant at this point of my career thanks to all the projects and companies I've worked on and with.<br /><br />I can make a software from scratch, starting with the design of database and processes up to the coding of back end and front end.<br /><br />I have solid understanding in terms of software engineering and software architecture. I've been backed up about this with most of my most important clients in this list.<br /><br />I can setup a cloud platform to deploy all the software products we build (as a team).<br /><br />I'm in love of this industry and of my career and I enjoy a lot doing what I do.<br /><br />What I love the most is what I learned from all the awesome people I've ever worked with, and I'm always excited to learn even more from all companies I still have to work with in the future.</p>
        </div>

        {/* Skills */}
        <div id="skills" className="content__skills">
          <h2>Skills</h2>
          <hr className="w3-opacity" />
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

        {/* Contact */}
        <div id="contact" className="content__contact">
          <h2>Contact Me</h2>
          <hr className="w3-opacity" />
        </div>  
        
        {/* Footer */}
        <footer className="content__footer">
          <i className="fa fa-facebook-official w3-hover-opacity"></i>
          <i className="fa fa-instagram w3-hover-opacity"></i>
          <i className="fa fa-pinterest-p w3-hover-opacity"></i>
          <i className="fa fa-twitter w3-hover-opacity"></i>
          <i className="fa fa-linkedin w3-hover-opacity"></i>
          <p className="w3-medium">Developed by Eng. Ernesto Murrugarra</p>
          <p className="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" className="w3-hover-text-green" rel="noreferrer">w3.css</a></p>
        </footer>
      </div>
    </>
  )
}