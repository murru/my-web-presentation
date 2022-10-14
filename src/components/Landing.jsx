import react from 'react'
import SlideCarousel from './SlideCarousel'
import Navbar from './Navbar'
import NavToggler from './NavToggler'
import Header from './Header'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'
import { LangContext } from '../context/LangContext'
import { ThemeContext } from '../context/ThemeContext'

import { gql, useQuery } from '@apollo/client'
import { useContext, useState } from 'react'

export default function Landing() {
  const [showNav, setShowNav] = useState(false)

  const { lang } = useContext(LangContext)
  const { theme } = useContext(ThemeContext)

  const LANDING = gql`
    query {
      landing(locale: "${lang}") {
        data {
          attributes {
            murruPictures { url, alt },
            navMenu { option, to },
            home {
              title,
              subtitle,
              cvBtn {
                title,
                icon,
                url
              }
            },
            aboutMe {
              title,
              text
            },
            skills {
              title,
              light (pagination: { page: 1, pageSize: 100 }) { url },
              dark (pagination: { page: 1, pageSize: 100 }) { url }
            },
            contact {
              title,
              text,
              iconLinks { url, classes }
            }
          }
        }
      }
    }
  `
  const { loading, error, data } = useQuery(LANDING)
  
  if (loading) return <p>Loading...</p>
  if (error) {
    return <p>Error! =/</p>
  } else {
    
    const landing = data.landing.data.attributes
    
    return (
      <div id={theme}>
        {/* Engineer images carousel */}
        <SlideCarousel pics={ landing.murruPictures } mobile={ false } />
  
        {/* Navbar */}
        <Navbar list={ landing.navMenu } showNav={ showNav } setShowNav={ setShowNav } />
  
        {/* Page Content */}
        <div className="content">
  
          {/* Navbar Toggler */}
          <NavToggler showNav={ showNav } setShowNav={ setShowNav } />
  
          {/* Header */}
          <Header data={ landing.home } pics={ landing.murruPictures } />
  
          {/* About me */}
          <AboutMe data={ landing.aboutMe } />
  
          {/* Portfolio */}
          <Portfolio />
  
          {/* Skills */}
          <Skills data={ landing.skills } />
  
          {/* Contact */}
          <Contact data={ landing.contact } />
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
    )
  }
}