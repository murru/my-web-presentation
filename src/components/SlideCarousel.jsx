import React from "react"
import engOne from '../assets/eng-1.jpg'
import engTwo from '../assets/eng-2.jpg'
import engThree from '../assets/eng-3.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default function SlideCarousel({ mobile }) {

  if (mobile) {
    return (
      <Carousel
        autoPlay={ true }
        renderIndicator={ false }
        showArrows={ false }
        showStatus={ false }
        showThumbs={ false }
        infiniteLoop={ true }
        selectedItem={ 0 }
        className="mobile-carousel"
      >
        <img className="mobile-carousel-img" src={ engOne } alt="" />
        <img className="mobile-carousel-img" src={ engTwo } alt="" />
        <img className="mobile-carousel-img" src={ engThree } alt="" />
      </Carousel>
    )
  } else {
    return (
      <Carousel
        autoPlay={ true }
        renderIndicator={ false }
        showArrows={ false }
        showStatus={ false }
        showThumbs={ false }
        infiniteLoop={ true }
        selectedItem={ 0 }
        className="sidebar"
      >
        <div className="img-carousel" style={{ backgroundImage: `url(${engOne})` }}></div>
        <div className="img-carousel" style={{ backgroundImage: `url(${engTwo})` }}></div>
        <div className="img-carousel" style={{ backgroundImage: `url(${engThree})` }}></div>
      </Carousel>
    )
  }
}