import React from "react"

export default function AboutMe({ data }) {

  return (
    <div id="aboutMe" className="content__about-me">
      <h2>{ data.title }</h2>
      <hr className="w3-opacity" />
      <p className="w3-large">{ data.text }</p>
    </div>
  )
}