import React from "react"
import classNames from "classnames"

export default function LangSelector({ showLangs, setShowLangs, lang, setLang }) {
  const reactiveClasses = classNames('lang-dropdown__dropdown',  { 'w3-show': showLangs })
  const selectedLang = lang === 'en' ? 'En' : 'Es'

  function changeState() {
    setShowLangs(!showLangs)
  }

  function changeLang($evt, nl) {
    setLang(nl)
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
          <a href="#" className="btn" onClick={ ($evt) => changeLang($evt, 'es') }>Es</a>
        }
        { lang === 'es' &&
          <a href="#" className="btn" onClick={ ($evt) => changeLang($evt, 'en') }>En</a>
        }
      </div>
    </div>
  )
}