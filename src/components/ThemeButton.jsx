import React from "react"

export default function ThemeButton({ theme, setTheme }) {
  function changeTheme($evt, flag) {
    setTheme(flag)
  }
  return (
    <>
      {theme === 'light' &&
        <button type="button" className="theme-button" title="Change to dark theme" onClick={ ($evt) => changeTheme($evt, 'dark') }>
          <i className="fa-solid fa-moon"></i>
        </button>
      }
      {theme === 'dark' &&
        <button type="button" className="theme-button" title="Change to light theme" onClick={ ($evt) => changeTheme($evt, 'light') }>
          <i className="fa-solid fa-sun"></i>
        </button>
      }
    </>
  )
}