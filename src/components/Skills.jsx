import React from "react"
import nuxtJs from '../assets/nuxt.svg'
import laravel from '../assets/laravel.png'
import digitalOcean from '../assets/digitalocean.png'
import expressJs from '../assets/expressjs.png'
import firebase from '../assets/firebase.png'
import git from '../assets/git.png'
import githubActions from '../assets/github_actions.png'
import mongoDb from '../assets/mongodb.png'
import mySql from '../assets/mysql.png'
import nestJs from '../assets/nest.svg'
import nginx from '../assets/nginx.png'
import nodeJs from '../assets/node.png'
import php from '../assets/php.svg'
import react from '../assets/react.png'
import ubuntu from '../assets/ubuntu.png'
import vue from '../assets/vue.png'

export default function Skills() {
  return (
    <div id="skills" className="content__skills">
      <h2>Skills</h2>
      <hr className="w3-opacity" />
      <div className="skills-logos">
        <img className="logo" src={ nuxtJs } alt="" />
        <img className="logo" src={ laravel } alt="" />
        <img className="logo" src={ digitalOcean } alt="" />
        <img className="logo" src={ expressJs } alt="" />
        <img className="logo" src={ firebase } alt="" />
        <img className="logo" src={ git } alt="" />
        <img className="logo" src={ githubActions } alt="" />
        <img className="logo" src={ mongoDb } alt="" />
        <img className="logo" src={ mySql } alt="" />
        <img className="logo" src={ nestJs } alt="" />
        <img className="logo" src={ nginx } alt="" />
        <img className="logo" src={ nodeJs } alt="" />
        <img className="logo" src={ php } alt="" />
        <img className="logo" src={ react } alt="" />
        <img className="logo" src={ ubuntu } alt="" />
        <img className="logo" src={ vue } alt="" />
      </div>
    </div>
  )
}