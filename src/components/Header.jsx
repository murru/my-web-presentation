import React from "react"
import SlideCarousel from './SlideCarousel'

export default function Header() {
  return (
    <header id="home" className="content__header">
      <h1 className="my-name">Ernesto Murrugarra</h1>
      <p className="w3-xxlarge">Software Engineer</p>

      {/* Mobile carousel */}
      <SlideCarousel mobile={ true } />
      
      {/* Download resume btn */}
      <a className="resume-btn" href="https://docs.google.com/document/d/1WGBgwlq3rx9BywEE882D4tSXkxIq_gp_W16t8tkyYNo/edit?usp=sharing" target="_blank">
        <i className="fa fa-download"></i> Download Resume
      </a>
    </header>
  )
}