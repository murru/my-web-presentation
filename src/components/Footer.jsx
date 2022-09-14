import React from "react"

export default function Footer() {
  return (
    <footer className="content__footer">
      <div className="rrss">
        <a href="https://www.instagram.com/garramurru/" target="_blank">
          <i className="fa fa-instagram w3-hover-opacity"></i>
        </a>
        <a href="https://twitter.com/Murru90" target="_blank">
          <i className="fa fa-twitter w3-hover-opacity"></i>
        </a>
        <a href="https://www.linkedin.com/in/murrugarra/" target="_blank">
          <i className="fa fa-linkedin w3-hover-opacity"></i>
        </a>
      </div>
      <p className="w3-medium">Developed by Eng. Ernesto Murrugarra</p>
      <p className="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" className="w3-hover-text-green" rel="noreferrer">w3.css</a> & <a href="https://fontawesome.com/" target="_blank" className="w3-hover-text-green" rel="noreferrer">Fontawesome</a></p>
    </footer>
  )
}