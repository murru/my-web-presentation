import React from "react"
import classNames from "classnames"

export default function Navbar({ list, showNav, setShowNav }) {
  const reactiveClasses = classNames('navbar',  { 'hidden-navbar': !showNav, 'visible-navbar': showNav })
  function changeState() {
    setShowNav(!showNav)
  }

  function closeNav() {
    setShowNav(false)
  }

  const items = list.map((item, i) => {
    return <a key={ `item-${i}` } href={ item.to } className="link" onClick={ () => closeNav() }>{ item.option }</a>
  })
  return (
    <nav className={ reactiveClasses } id="mySidebar">
      <button
        className="navbar__btn"
        onClick={ () => changeState() }
        title="Hide options"
      >
        <i className="fa fa-remove"></i>
      </button>
      <div className="navbar__options">
        { items }
      </div>
    </nav>
  )
}