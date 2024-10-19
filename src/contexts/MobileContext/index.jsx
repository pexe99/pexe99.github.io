import React, { createContext, useState, useEffect } from "react"

const MobileContext = createContext({})

const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0

      return (
        isTouchDevice ||
        /android/i.test(userAgent) ||
        /iPad|iPhone|iPod/.test(userAgent)
      )
    }

    setIsMobile(checkIsMobile())
  }, [])

  if (isMobile === null) {
    return <>{children}</>
  }

  return (
    <MobileContext.Provider value={{ isMobile, setIsMobile }}>
      {children}
    </MobileContext.Provider>
  )
}

export { MobileProvider, MobileContext }
