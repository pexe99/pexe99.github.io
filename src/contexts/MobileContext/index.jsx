import React, { createContext, useState } from "react"

const MobileContext = createContext({})

const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(
    "ontouchstart" in window || navigator.maxTouchPoints > 0
  )

  return (
    <MobileContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </MobileContext.Provider>
  )
}

export { MobileProvider, MobileContext }
