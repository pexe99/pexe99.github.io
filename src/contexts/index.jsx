import React from "react"
import { MobileProvider } from "./MobileContext"
import { ThemeProvider } from "./ThemeContext"
const ContextProvider = ({ children }) => {
  return (
    <MobileProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </MobileProvider>
  )
}

export default ContextProvider
