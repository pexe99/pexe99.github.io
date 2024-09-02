import React from "react"
import { MobileProvider } from "./MobileContext"
import { ThemeProvider } from "./ThemeContext"
import { NavProvider } from "./NavContext"
import { ToastProvider } from "./ToastContext"
const ContextProvider = ({ children }) => {
  return (
    <ToastProvider>
      <MobileProvider>
        <NavProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </NavProvider>
      </MobileProvider>
    </ToastProvider>
  )
}

export default ContextProvider
