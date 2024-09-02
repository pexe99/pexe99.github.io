import { lightTheme, darkTheme } from "../../themes/colors"
import React, { createContext, useState, useEffect } from "react"
import { ThemeProvider as StyledProvider } from "styled-components"

const ThemeContext = createContext({})

const ThemeProvider = ({ children }) => {
  const [ThemeMode, setThemeMode] = useState("light")

  useEffect(() => {
    const LocalTheme = window.localStorage.getItem("theme") || "light"
    setThemeMode(LocalTheme)
  }, [])

  const themeObject = ThemeMode === "light" ? lightTheme : darkTheme

  const toggleTheme = () => {
    let toggleMode = ThemeMode === "light" ? "dark" : "light"
    setThemeMode(toggleMode)
    window.localStorage.setItem("theme", toggleMode)
  }

  return (
    <ThemeContext.Provider value={{ ThemeMode, toggleTheme }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
