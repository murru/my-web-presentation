import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import wedding from '../assets/wedding.jpg'
import rocks from '../assets/rocks.jpg'
import sailBoat from '../assets/sailboat.jpg'
import underWater from '../assets/underwater.jpg'
import chef from '../assets/chef.jpg'
import p6 from '../assets/p6.jpg'

export default function Portfolio() {
  const { theme } = useContext(ThemeContext)
  const git = theme === 'light' ? 'https://website-admin.ekodevs.com/uploads/git_fee3c3d552.png?updated_at=2022-10-14T16:02:32.160Z' : 'https://website-admin.ekodevs.com/uploads/git_dark_24b74dd9ab.png?updated_at=2022-10-14T16:02:34.838Z'
  const mongoDb = theme === 'light' ? 'https://website-admin.ekodevs.com/uploads/mongo_db_05b0eb45c6.png?updated_at=2022-10-14T16:04:29.800Z' : 'https://website-admin.ekodevs.com/uploads/mongo_db_dark_8a6483b908.png?updated_at=2022-10-14T16:04:29.645Z'
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
                <img className="techs__tech-img" src={ git } />
                <img className="techs__tech-img" src={ mongoDb } />
              </div>
            </div>
          </div>
          <div className="img-container">
            <img className="img-container__port-img" src={ rocks } alt="" />
            <div className="img-container__middle">
              <div className="techs">
                <img className="techs__tech-img" src={ git } />
                <img className="techs__tech-img" src={ mongoDb } />
              </div>
            </div>
          </div>
          <div className="img-container">
            <img className="img-container__port-img" src={ sailBoat } alt="" />
            <div className="img-container__middle">
              <div className="techs">
                <img className="techs__tech-img" src={ git } />
                <img className="techs__tech-img" src={ mongoDb } />
              </div>
            </div>
          </div>
        </div>

        <div className="photos-grid__half">
          <div className="img-container">
            <img className="img-container__port-img" src={ underWater } alt="" />
            <div className="img-container__middle">
              <div className="techs">
                <img className="techs__tech-img" src={ git } />
                <img className="techs__tech-img" src={ mongoDb } />
              </div>
            </div>
          </div>
          <div className="img-container">
            <img className="img-container__port-img" src={ chef } alt="" />
            <div className="img-container__middle">
              <div className="techs">
                <img className="techs__tech-img" src={ git } />
                <img className="techs__tech-img" src={ mongoDb } />
              </div>
            </div>
          </div>
          <div className="img-container">
            <img className="img-container__port-img" src={ wedding } alt="" />
            <div className="img-container__middle">
              <div className="techs">
                <img className="techs__tech-img" src={ git } />
                <img className="techs__tech-img" src={ mongoDb } />
              </div>
            </div>
          </div>
          <div className="img-container">
            <img className="img-container__port-img" src={ p6 } alt="" />
            <div className="img-container__middle">
              <div className="techs">
                <img className="techs__tech-img" src={ git } />
                <img className="techs__tech-img" src={ mongoDb } />
              </div>
            </div>
          </div>
        </div>
        {/* End photo grid */}
      </div>
    </div>
  )
}