import React, { useState } from 'react'
import ThemeButton from './ThemeButton'
import LangSelector from './LangSelector'

export default function NavToggler({ setShowNav, showNav }) {
  const [showLangs, setShowLangs] = useState(false)
  const test = ""
  function toggleNavbar() {
    setShowNav(!showNav)
  }

  return (
    <div className="content__nav-toggle">
      <div className="nav-wrapper">
        <div className="nav-wrapper__bar">
          <ThemeButton />
          <LangSelector
            showLangs={ showLangs }
            setShowLangs={ setShowLangs }
          />
          <button
            className="btn"
            onClick={ () => toggleNavbar() }
            title="Show options"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div> 
    </div>
  )
}