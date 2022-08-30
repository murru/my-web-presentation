import React from 'react'
import profileGirl from './assets/profile_girl.jpg'
import wedding from './assets/wedding.jpg'
import rocks from './assets/rocks.jpg'
import sailBoat from './assets/sailboat.jpg'
import underWater from './assets/underwater.jpg'
import chef from './assets/chef.jpg'
import p6 from './assets/p6.jpg'
import avatarSmoke from './assets/avatar_smoke.jpg'
import bandMember from './assets/bandmember.jpg'
import avatarG2 from './assets/avatar_g2.jpg'
import map from './assets/map.jpg'
import './App.scss'

export default function App() {
  return (
    <>
      {/* Sidebar with image */}
      <nav className="sidebar">
        <div className="sidebar__img"></div>
      </nav>

      {/* Hidden Sidebar (reveals when clicked on menu ico */}
      <nav className="w3-sidebar w3-black w3-animate-right w3-xxlarge" style={{ display: "none", paddingTop: "150px", right: "0", zIndex: "2" }} id="mySidebar">
        <button className="w3-button w3-black w3-xxxlarge w3-display-topright" style={{ padding: "0 12px" }}>
          <i className="fa fa-remove"></i>
        </button>
        <div className="w3-bar-block w3-center">
          <a href="#home" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Home</a>
          <a href="#portfolio" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Portfolio</a>
          <a href="#about" className="w3-bar-item w3-button w3-text-grey w3-hover-black">About</a>
          <a href="#contact" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Contact</a>
        </div>
      </nav>

      {/* Page Content */}
      <div className="w3-main w3-padding-large" style={{ marginLeft: "40%" }}>

        {/* Menu icon to open sidebar */}
        <span className="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black" style={{ width: "auto", right: "0" }}><i className="fa fa-bars"></i></span>

        {/* Header */}
        <header className="w3-container w3-center" style={{ padding: "128px 16px" }} id="home">
          <h1 className="w3-jumbo"><b>Jane Doe</b></h1>
          <p>Photographer and Web Designer.</p>
          <img src={ profileGirl } className="w3-image w3-hide-large w3-hide-small w3-round" style={{ display: "block", width: "60%", margin: "auto" }} alt="" />
          <img src={ profileGirl } className="w3-image w3-hide-large w3-hide-medium w3-round" width="1000" height="1333" alt="" />
          <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
            <i className="fa fa-download"></i> Download Resume
          </button>
        </header>

        {/* Portfolio Section */}
        <div className="w3-padding-32 w3-content" id="portfolio">
          <h2 className="w3-text-grey">My Portfolio</h2>
          <hr className="w3-opacity" />

          {/* Grid for photos */}
          <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
            <div className="w3-half">
              <img src={ wedding } style={{ width: "100%" }} alt="" />
              <img src={ rocks } style={{ width: "100%" }} alt="" />
              <img src={ sailBoat } style={{ width: "100%" }} alt="" />
            </div>

            <div className="w3-half">
              <img src={ underWater } style={{ width: "100%" }} alt="" />
              <img src={ chef } style={{ width: "100%" }} alt="" />
              <img src={ wedding } style={{ width: "100%" }} alt="" />
              <img src={ p6 } style={{ width: "100%" }} alt="" />
            </div>
            {/* End photo grid */}
          </div>
        {/* End Portfolio Section */}
        </div>

        {/* About Section */}
        <div className="w3-content w3-justify w3-text-grey w3-padding-32" id="about">
          <h2>About</h2>
          <hr className="w3-opacity" />
          <p>Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h3 className="w3-padding-16">My Skills</h3>
          <p className="w3-wide">Photography</p>
          <div className="w3-light-grey">
            <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{ width: "95%" }}>95%</div>
          </div>
          <p className="w3-wide">Web Design</p>
          <div className="w3-light-grey">
            <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{ width: "85%" }}>85%</div>
          </div>
          <p className="w3-wide">Photoshop</p>
          <div className="w3-light-grey">
            <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{ width: "80%" }}>80%</div>
          </div><br />

          <div className="w3-row w3-center w3-dark-grey w3-padding-16 w3-section">
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">14+</span><br />
              Partners
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">55+</span><br />
              Projects Done
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">89+</span><br />
              Happy Clients
            </div>
            <div className="w3-quarter w3-section">
              <span className="w3-xlarge">150+</span><br />
              Meetings
            </div>
          </div>

          <button className="w3-button w3-light-grey w3-padding-large w3-section">
            <i className="fa fa-download"></i> Download Resume
          </button>

          {/* Testimonials */}
          <h3 className="w3-padding-24">My Reputation</h3>
          <img src={ avatarSmoke } alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: "80px" }} />
          <p><span className="w3-large w3-text-black w3-margin-right">Chandler Bing.</span> Web Designer.</p>
          <p>Jane Doe is just awesome. I am so happy to have met her!</p><br />
        
          <img src={ bandMember } alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: "80px" }} />
          <p><span className="w3-large w3-text-black w3-margin-right">Chris Fox.</span> CEO at Mighty Schools.</p>
          <p>Jane Doe saved us from a web disaster.</p><br />
          
          <img src={ avatarG2 } alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: "80px" }} />
          <p><span className="w3-large w3-text-black w3-margin-right">Rebecca Flex.</span> CEO at Company.</p>
          <p>No one is better than Jane Doe.</p><br />
          
          {/* Grid for pricing tables */}
          <h3 className="w3-padding-16">My Price</h3>
          <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
            <div className="w3-half w3-margin-bottom">
              <ul className="w3-ul w3-center w3-card w3-hover-shadow">
                <li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
                <li className="w3-padding-16">Web Design</li>
                <li className="w3-padding-16">Photography</li>
                <li className="w3-padding-16">5GB Storage</li>
                <li className="w3-padding-16">Mail Support</li>
                <li className="w3-padding-16">
                  <h2>$ 10</h2>
                  <span className="w3-opacity">per month</span>
                </li>
                <li className="w3-light-grey w3-padding-24">
                  <button className="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
                </li>
              </ul>
            </div>

            <div className="w3-half">
              <ul className="w3-ul w3-center w3-card w3-hover-shadow">
                <li className="w3-black w3-xlarge w3-padding-32">Pro</li>
                <li className="w3-padding-16">Web Design</li>
                <li className="w3-padding-16">Photography</li>
                <li className="w3-padding-16">50GB Storage</li>
                <li className="w3-padding-16">Endless Support</li>
                <li className="w3-padding-16">
                  <h2>$ 25</h2>
                  <span className="w3-opacity">per month</span>
                </li>
                <li className="w3-light-grey w3-padding-24">
                  <button className="w3-button w3-white w3-padding-large w3-hover-black">Sign Up</button>
                </li>
              </ul>
            </div>
          {/* End Grid/Pricing tables */}
          </div>
          
        {/* End About Section */}
        </div>

        {/* Contact Section */}
        <div className="w3-padding-32 w3-content w3-text-grey" id="contact" style={{ marginBottom: "64px" }}>
          <h2>Contact Me</h2>
          <hr className="w3-opacity" />

          <div className="w3-section">
            <p><i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Chicago, US</p>
            <p><i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +00 151515</p>
            <p><i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: mail@mail.com</p>
          </div>
          
          {/* Image of location/map */}
          <img src={ map } className="w3-image w3-greyscale" style={{ width: "100%", margin: "32px 0" }} alt="" />
        
          <p>Lets get in touch. Send me a message:</p>
          <form action="/action_page.php" target="_blank">
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Email" required name="Email" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Subject" required name="Subject" /></p>
            <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message" required name="Message" /></p>
            <p>
              <button className="w3-button w3-light-grey w3-padding-large" type="submit">
                <i className="fa fa-paper-plane"></i> SEND MESSAGE
              </button>
            </p>
          </form>
        {/* End Contact Section */}
        </div>  
        
        {/* Footer */}
        <footer className="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge" style={{ margin: "-24px" }}>
          <i className="fa fa-facebook-official w3-hover-opacity"></i>
          <i className="fa fa-instagram w3-hover-opacity"></i>
          <i className="fa fa-snapchat w3-hover-opacity"></i>
          <i className="fa fa-pinterest-p w3-hover-opacity"></i>
          <i className="fa fa-twitter w3-hover-opacity"></i>
          <i className="fa fa-linkedin w3-hover-opacity"></i>
          <p className="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" className="w3-hover-text-green" rel="noreferrer">w3.css</a></p>
        {/* End footer */}
        </footer>
        
      {/* END PAGE CONTENT */}
      </div>
    </>
  )
}