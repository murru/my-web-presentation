import React from "react"
import classNames from "classnames"

export default function LangSelector({ showLangs, setShowLangs, lang, setLang }) {
  const reactiveClasses = classNames('lang-dropdown__dropdown',  { 'w3-show': showLangs })
  const selectedEng = classNames({ 'selected-lang': lang === 'en' })
  const selectedEsp = classNames({ 'selected-lang': lang === 'es' })
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
      <button className="lang-dropdown__btn" onClick={ () => changeState() } title="Change language">
        <i className="fa-solid fa-globe"></i>
      </button>
      <div className={ reactiveClasses }>
        <button type="button" className="lang-btn" onClick={ ($evt) => changeLang($evt, 'en') }>
          <span className={ selectedEng }>
            Eng
          </span>
        </button>
        <button type="button" className="lang-btn" onClick={ ($evt) => changeLang($evt, 'es') }>
          <span className={ selectedEsp }>
            Esp
          </span>
        </button>
      </div>
    </div>
  )
}