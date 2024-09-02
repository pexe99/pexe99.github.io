import React, { createContext, useState, useEffect } from "react"

const MobileContext = createContext({})

const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile =
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    setIsMobile(checkIsMobile)
  }, [])

  return (
    <MobileContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </MobileContext.Provider>
  )
}

export { MobileProvider, MobileContext }
