import React from "react"

export default function Contact({ data }) {
  const iconLinks = data.iconLinks.map((il, i) => {
    return (
      <a key={ `iconLink-${i}` } className="w3-padding" href={ il.url } target="_blank">
        <i className={ il.classes }></i>
      </a>
    )
  })
  return (
    <div id="contact" className="content__contact">
      <h2>{ data.title }</h2>
      <hr className="w3-opacity" />
      <p className="w3-center w3-large">{ data.text }</p>
      <div className="w3-center w3-xxxlarge">
        { iconLinks }
      </div>
    </div>  
  )
}