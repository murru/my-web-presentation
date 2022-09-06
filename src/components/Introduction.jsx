import React from "react"
import { TypeAnimation } from 'react-type-animation'

export default function Introduction() {
  const steps = [
    "I love software development ❤️!!!", 3000,
    "I've been doing this for 9+ years 😎, so...", 3000,
    "You can ask me anything you want", 2000,
    "✨'Cause I will guide you to the correct way✨", 5000,
    "Enjoy my website and...", 2000,
    "If you want to talk contact me, below is the information", 3000,
    "I can help you with databases,", 2000,
    "Back end and front end code,", 2000,
    "Even setting up a CI/CD so you can check all changes in real time", 5000,
    "Let's not waste any more time 🧑🏻‍💻", 7000,
    "Starting again...", 5000,
  ]
  return (
    <TypeAnimation
      sequence={ steps }
      wrapper="div"
      cursor={ true }
      repeat={ Infinity }
      style={{ fontSize: '2em' }}
      speed={ 50 }
    />
  )
}