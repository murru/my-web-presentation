import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      {theme === 'light' &&
        <button
          className="btn bg-theme-btn"
          title="Change to dark theme"
          onClick={ () => toggleTheme('dark') }
        >
          <i className="fa-solid fa-moon"></i>
        </button>
      }
      {theme === 'dark' &&
        <button
          className="btn bg-theme-btn"
          title="Change to light theme"
          onClick={ () => toggleTheme('light') }
        >
          <i className="fa-solid fa-sun"></i>
        </button>
      }
    </>
  )
}