import React from "react"
import { MobileProvider } from "./MobileContext"
import { ThemeProvider } from "./ThemeContext"
import { NavProvider } from "./NavContext"
const ContextProvider = ({ children }) => {
  return (
    <MobileProvider>
      <NavProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </NavProvider>
    </MobileProvider>
  )
}

export default ContextProvider
