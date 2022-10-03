import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import wedding from '../assets/wedding.jpg'
import rocks from '../assets/rocks.jpg'
import sailBoat from '../assets/sailboat.jpg'
import underWater from '../assets/underwater.jpg'
import chef from '../assets/chef.jpg'
import p6 from '../assets/p6.jpg'

import git from '../assets/git.png'
import gitDark from '../assets/git-dark.png'
import mongoDb from '../assets/mongo-db.png'
import mongoDbDark from '../assets/mongo-db-dark.png'

export default function Portfolio() {
  const { theme } = useContext(ThemeContext)
  return (
    <div id="portfolio" className="content__portfolio">
      <h2>My Portfolio</h2>
      <hr className="w3-opacity" />

      {/* Grid for photos */}
      <div className="photos-grid">
        <div className="photos-grid__half">
          <div className="img-container">
            <img className="img-container__port-img" src={ wedding } alt="" />
            <div className="img-container__middle">
              <div className="techs">
                <img className="techs__tech-img" src={ theme === 'light' ? git : gitDark } alt="" />
                <img className="techs__tech-img" src={ theme === 'light' ? mongoDb : mongoDbDark } alt="" />
              </div>
            </div>
          </div>
          <div className="img-container">
            <img className="img-container__port-img" src={ rocks } alt="" />
            <div className="img-container__middle">
              <div className="techs">
                <img className="techs__tech-img" src={ theme === 'light' ? git : gitDark } alt="" />
                <img className="techs__tech-img" src={ theme === 'light' ? mongoDb : mongoDbDark } alt="" />
              </div>
            </div>
          </div>
          <div className="img-container">
            <img className="img-container__port-img" src={ sailBoat } alt="" />
            <div className="img-container__middle">
              <div className="techs">
                <img className="techs__tech-img" src={ theme === 'light' ? git : gitDark } alt="" />
                <img className="techs__tech-img" src={ theme === 'light' ? mongoDb : mongoDbDark } alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="photos-grid__half">
          <div className="img-container">
            <img className="img-container__port-img" src={ underWater } alt="" />
            <div className="img-container__middle">
              <div className="techs">
                <img className="techs__tech-img" src={ theme === 'light' ? git : gitDark } alt="" />
                <img className="techs__tech-img" src={ theme === 'light' ? mongoDb : mongoDbDark } alt="" />
              </div>
            </div>
          </div>
          <div className="img-container">
            <img className="img-container__port-img" src={ chef } alt="" />
            <div className="img-container__middle">
              <div className="techs">
                <img className="techs__tech-img" src={ theme === 'light' ? git : gitDark } alt="" />
                <img className="techs__tech-img" src={ theme === 'light' ? mongoDb : mongoDbDark } alt="" />
              </div>
            </div>
          </div>
          <div className="img-container">
            <img className="img-container__port-img" src={ wedding } alt="" />
            <div className="img-container__middle">
              <div className="techs">
                <img className="techs__tech-img" src={ theme === 'light' ? git : gitDark } alt="" />
                <img className="techs__tech-img" src={ theme === 'light' ? mongoDb : mongoDbDark } alt="" />
              </div>
            </div>
          </div>
          <div className="img-container">
            <img className="img-container__port-img" src={ p6 } alt="" />
            <div className="img-container__middle">
              <div className="techs">
                <img className="techs__tech-img" src={ theme === 'light' ? git : gitDark } alt="" />
                <img className="techs__tech-img" src={ theme === 'light' ? mongoDb : mongoDbDark } alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* End photo grid */}
      </div>
    </div>
  )
}