import React from "react"
import wedding from '../assets/wedding.jpg'
import rocks from '../assets/rocks.jpg'
import sailBoat from '../assets/sailboat.jpg'
import underWater from '../assets/underwater.jpg'
import chef from '../assets/chef.jpg'
import p6 from '../assets/p6.jpg'

export default function Portfolio() {
  return (
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
    </div>
  )
}