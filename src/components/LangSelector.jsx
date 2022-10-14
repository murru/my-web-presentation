import React from "react"
import classNames from "classnames"
import { LangContext } from "../context/LangContext"
import { useContext } from "react"

export default function LangSelector({ showLangs, setShowLangs }) {
  const { lang, toggleLang } = useContext(LangContext)
  const reactiveClasses = classNames('lang-dropdown__dropdown',  { 'w3-show': showLangs })
  const selectedLang = lang === 'en' ? 'En' : 'Es'

  function changeState() {
    setShowLangs(!showLangs)
  }

  function changeLang($evt, nl) {
    toggleLang(nl)
    closeNav()
  }

  function closeNav() {
    setShowLangs(false)
  }
  return (
    <div className="lang-dropdown">
      { !showLangs &&
        <button className="lang-dropdown__btn" onClick={ () => changeState() } title="Change language">
          { selectedLang }
          <i className="fa-solid fa-chevron-down w3-small"></i>
        </button>
      }
      { showLangs &&
        <button className="lang-dropdown__btn" onClick={ () => changeState() } title="Change language">
          { selectedLang }
          <i className="fa-solid fa-chevron-up w3-small"></i>
        </button>
      }
      <div className={ reactiveClasses }>
        { lang === 'en' &&
          <a href="#" className="btn" onClick={ ($evt) => changeLang($evt, 'es-VE') }>Es</a>
        }
        { lang === 'es-VE' &&
          <a href="#" className="btn" onClick={ ($evt) => changeLang($evt, 'en') }>En</a>
        }
      </div>
    </div>
  )
}