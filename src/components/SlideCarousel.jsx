import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default function SlideCarousel({ pics, mobile }) {
  let images = null
  if (mobile) {

    images = pics.map((pic, i) => {
      return <img key={ i } className="mobile-carousel-img" src={ pic.url } alt={ pic.alt } />
    })
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
        { images }
      </Carousel>
    )
  } else {

    images = pics.map((pic, i) => {
      return <div key={ i } className="img-carousel" style={{ backgroundImage: `url(${pic.url})` }} alt={ pic.alt }></div>
    })
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
        { images }
      </Carousel>
    )
  }
}