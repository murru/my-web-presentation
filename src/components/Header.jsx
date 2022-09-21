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
      <button className="resume-btn">
        <i className="fa fa-download"></i> Download Resume
      </button>
    </header>
  )
}