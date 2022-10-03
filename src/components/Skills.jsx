import React, { useContext } from "react"
import git from '../assets/git.png'
import gitDark from '../assets/git-dark.png'
import mongoDb from '../assets/mongo-db.png'
import mongoDbDark from '../assets/mongo-db-dark.png'
import { ThemeContext } from "../context/ThemeContext"

export default function Skills() {
  const { theme } = useContext(ThemeContext)
  return (
    <div id="skills" className="content__skills">
      <h2>Skills</h2>
      <hr className="w3-opacity" />
      <div className="skills-logos">
        <img className="logo" src={ theme === 'light' ? git : gitDark } alt="" />
        <img className="logo" src={ theme === 'light' ? mongoDb : mongoDbDark } alt="" />
      </div>
    </div>
  )
}