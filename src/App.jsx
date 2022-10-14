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
  const [theme, setTheme] = useState('light')
  const [lang, setLang] = useState('en')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  const toggleLang = (langToSet) => {
    setLang(langToSet)
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