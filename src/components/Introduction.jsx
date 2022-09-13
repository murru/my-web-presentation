import React from "react"
import { TypeAnimation } from 'react-type-animation'

export default function Introduction() {
  const steps = [
    "I'm an Informatics Engineer from Caracas Venezuela who loves software development and any tech stuff nowadays. I consider myself a consultant at this point of my career because I've worked in many projects building software from zero passing through steps such as getting project requiremens, choosing stack to work with, writting the code and deployment process. Enjoy my website!",
  ]
  return (
    <TypeAnimation
      sequence={ steps }
      wrapper="p"
      cursor={ true }
      repeat={ false }
      speed={ 50 }
    />
  )
}