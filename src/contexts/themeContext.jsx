import { lightTheme, darkTheme } from "../themes/colors"
import React, { createContext, useState, useContext, useCallback } from "react"
import { ThemeProvider as StyledProvider } from "styled-components"

const ThemeContext = createContext({})

const ThemeProvider = ({ children }) => {
  const LocalTheme = window.localStorage.getItem("theme") || "light"
  const [ThemeMode, setThemeMode] = useState(LocalTheme)
  const themeObject = ThemeMode === "light" ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{ ThemeMode, setThemeMode }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)
  const { ThemeMode, setThemeMode } = context

  const toggleTheme = useCallback(() => {
    let toggleMode = ThemeMode === "light" ? "dark" : "light"
    setThemeMode(toggleMode)
    window.localStorage.setItem("theme", toggleMode)
  }, [ThemeMode, setThemeMode])

  return [ThemeMode, toggleTheme]
}

export { ThemeProvider, useTheme }
