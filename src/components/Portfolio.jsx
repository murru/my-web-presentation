import React from "react"
import wedding from '../assets/wedding.jpg'
import rocks from '../assets/rocks.jpg'
import sailBoat from '../assets/sailboat.jpg'
import underWater from '../assets/underwater.jpg'
import chef from '../assets/chef.jpg'
import p6 from '../assets/p6.jpg'

import nuxtJs from '../assets/nuxt.svg'
import laravel from '../assets/laravel.png'

export default function Portfolio() {
  return (
    <div id="portfolio" className="content__portfolio">
      <h2>My Portfolio</h2>
      <hr className="w3-opacity" />

      {/* Grid for photos */}
      <div className="photos-grid">
        <div className="photos-grid__half">
          <a className="img-container" href="https://fttalent.work" target="_blank">
            <img className="img-container__port-img" src={ wedding } alt="" />
            <div className="img-container__middle">
              <div className="techs">
                <img className="techs__tech-img" src={ nuxtJs } alt="" /><img className="techs__tech-img" src={ laravel } alt="" /><img className="techs__tech-img" src={ nuxtJs } alt="" />
              </div>
            </div>
          </a>
          <a className="img-container" href="https://fttalent.work" target="_blank">
            <img className="img-container__port-img" src={ rocks } alt="" />
          </a>
          <a className="img-container" href="https://fttalent.work" target="_blank">
            <img className="img-container__port-img" src={ sailBoat } alt="" />
          </a>
        </div>

        <div className="photos-grid__half">
          <a className="img-container" href="https://fttalent.work" target="_blank">
            <img className="img-container__port-img" src={ underWater } alt="" />
          </a>
          <a className="img-container" href="https://fttalent.work" target="_blank">
            <img className="img-container__port-img" src={ chef } alt="" />
          </a>
          <a className="img-container" href="https://fttalent.work" target="_blank">
            <img className="img-container__port-img" src={ wedding } alt="" />
          </a>
          <a className="img-container" href="https://fttalent.work" target="_blank">
            <img className="img-container__port-img" src={ p6 } alt="" />
          </a>
        </div>
        {/* End photo grid */}
      </div>
    </div>
  )
}