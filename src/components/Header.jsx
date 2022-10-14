import React from "react"
import SlideCarousel from './SlideCarousel'

export default function Header({ data, pics }) {

  return (
    <header id="home" className="content__header">
      <h1 className="my-name">{ data.title }</h1>
      <p className="w3-xxlarge">{ data.subtitle }</p>

      {/* Mobile carousel */}
      <SlideCarousel pics={ pics } mobile={ true } />
      
      {/* Download resume btn */}
      <a className="resume-btn" href={ data.cvBtn.url } target="_blank">
        <i className={ data.cvBtn.icon }></i> { data.cvBtn.title }
      </a>
    </header>
  )
}