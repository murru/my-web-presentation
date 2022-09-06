import React from "react"
import classNames from "classnames"

export default function Navbar({ showNav, setShowNav }) {
  const reactiveClasses = classNames('navbar',  { 'hidden-navbar': !showNav, 'visible-navbar': showNav })
  function changeState() {
    setShowNav(!showNav)
  }

  function closeNav() {
    setShowNav(false)
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
        <a href="#home" className="link" onClick={ () => closeNav() }>Home</a>
        <a href="#portfolio" className="link" onClick={ () => closeNav() }>My Portfolio</a>
        <a href="#skills" className="link" onClick={ () => closeNav() }>Skills</a>
        <a href="#testimonials" className="link" onClick={ () => closeNav() }>Testimonials</a>
        <a href="#contact" className="link" onClick={ () => closeNav() }>Contact</a>
      </div>
    </nav>
  )
}