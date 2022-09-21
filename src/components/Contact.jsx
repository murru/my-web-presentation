import React from "react"

export default function Contact() {
  return (
    <div id="contact" className="content__contact">
      <h2>Contact Me</h2>
      <hr className="w3-opacity" />
      <p className="w3-center w3-large">Lets get in touch and talk about your next project</p>
      <div className="w3-center w3-xxxlarge">
        <a className="w3-padding" href="https://wa.me/+584142430801" target="_blank">
          <i className="fa-brands fa-whatsapp w3-hover-opacity wa-icon-color"></i>
        </a>
        <a className="w3-padding" href="https://www.linkedin.com/in/murrugarra/" target="_blank">
          <i className="fa fa-linkedin w3-hover-opacity li-icon-color"></i>
        </a>
        <a className="w3-padding" href="https://www.instagram.com/garramurru/" target="_blank">
          <i className="fa fa-instagram w3-hover-opacity ig-icon-color"></i>
        </a>
        <a className="w3-padding" href="https://twitter.com/Murru90" target="_blank">
          <i className="fa fa-twitter w3-hover-opacity tw-icon-color"></i>
        </a>
      </div>
    </div>  
  )
}