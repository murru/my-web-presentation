import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function Skills({ data }) {
  const { theme } = useContext(ThemeContext)
  const list = theme === 'light' ? data.light : data.dark
  const logos = list.map((logo, i) => {
    return <img key={ i } className="logo" src={ logo.url } />
  })

  return (
    <div id="skills" className="content__skills">
      <h2>{ data.title }</h2>
      <hr className="w3-opacity" />
      <div className="skills-logos">
        { logos }
      </div>
    </div>
  )
}