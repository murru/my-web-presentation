import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <>
      {theme === 'light' &&
        <button type="button" className="theme-button" title="Change to dark theme" onClick={ toggleTheme }>
          <i className="fa-solid fa-moon"></i>
        </button>
      }
      {theme === 'dark' &&
        <button type="button" className="theme-button" title="Change to light theme" onClick={ toggleTheme }>
          <i className="fa-solid fa-sun"></i>
        </button>
      }
    </>
  )
}