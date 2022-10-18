import React, { useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { LangContext } from './context/LangContext'
import './App.scss'
import Landing from './components/Landing'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

// Apollo setup
const client = new ApolloClient({
  uri: 'https://website-admin.ekodevs.com/graphql',
  cache: new InMemoryCache()
})

export default function App() {
  let startTheme = null
  let startLang = null

  if (localStorage.getItem('themeOpt')) {
    startTheme = localStorage.getItem('themeOpt')
  } else {
    startTheme = 'light'
  }

  if (localStorage.getItem('themeLang')) {
    startLang = localStorage.getItem('themeLang')
  } else {
    startLang = 'en'
  }

  const [theme, setTheme] = useState(startTheme)
  const [lang, setLang] = useState(startLang)

  const toggleTheme = (themeToSet) => {
    setTheme(themeToSet)
    localStorage.setItem('themeOpt',themeToSet)
  }

  const toggleLang = (langToSet) => {
    setLang(langToSet)
    localStorage.setItem('themeLang', langToSet)
  }

  return (
    <ThemeContext.Provider value={ { theme, toggleTheme, lang, toggleLang }}>
      <LangContext.Provider value={ { lang, toggleLang }}>
        <ApolloProvider client={ client }>
          <Landing />
        </ApolloProvider>
      </LangContext.Provider>
    </ThemeContext.Provider>
  )
}