import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import LoadLight from '../assets/load-light.svg'
import LoadDark from '../assets/load-dark.svg'

export default function Loading() {
    const { theme } = useContext(ThemeContext)
    const gif = theme === 'light' ? LoadLight : LoadDark
    return (
        <div id={theme} className="load-wrapper">
            <img src={ gif } alt="Loading gif" />
        </div>
    )
}