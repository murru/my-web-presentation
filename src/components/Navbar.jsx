import React from "react"
import classNames from "classnames"

export default function Navbar({ showNav, setShowNav }) {
  const reactiveClasses = classNames('navbar',  { 'hidden-navbar': !showNav, 'visible-navbar': showNav })
  function changeState() {
    setShowNav(!showNav)
  }
  return (
    <nav className={ reactiveClasses } id="mySidebar">
      <button
        className="navbar__btn"
        onClick={ () => changeState() }
      >
        <i className="fa fa-remove"></i>
      </button>
      <div className="navbar__options">
        <a href="#home" className="link">Home</a>
        <a href="#portfolio" className="link">My Portfolio</a>
        <a href="#about" className="link">About</a>
        <a href="#skills" className="link">Skills</a>
        <a href="#testimonials" className="link">Testimonials</a>
        <a href="#contact" className="link">Contact</a>
      </div>
    </nav>
  )
}