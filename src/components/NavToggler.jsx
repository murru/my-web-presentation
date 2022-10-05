import React, { useState } from 'react'
import ThemeButton from './ThemeButton'
import LangSelector from './LangSelector'

export default function NavToggler({ setShowNav, showNav }) {
  const [showLangs, setShowLangs] = useState(false)
  const [lang, setLang] = useState('en')

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
            lang={ lang }
            setLang={ setLang }
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
  {/* <div className="content__nav-toggle">
    <span className="button" onClick={ () => toggleNavbar() } title="Show options">
      <i className="fa-solid fa-bars"></i>
    </span><br />
    <ThemeButton /><br />
    <LangSelector
      showLangs={ showLangs }
      setShowLangs={ setShowLangs }
      lang={ lang }
      setLang={ setLang }
    />
  </div> */}