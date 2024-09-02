import React, { createContext, useState, useEffect, useContext } from "react"
import { MobileContext } from "../MobileContext"

export const NavContext = createContext()

export const NavProvider = ({ children }) => {
  const { isMobile } = useContext(MobileContext)
  const [isNavVisible, setIsNavVisible] = useState(false)
  const [isNavFixed, setIsNavFixed] = useState(isMobile ? false : true)

  useEffect(() => {
    const LocalIsNavFixed =
      typeof window !== "undefined"
        ? window.localStorage.getItem("isNavFixed")
        : null
    if (LocalIsNavFixed !== null) {
      setIsNavFixed(JSON.parse(LocalIsNavFixed))
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("isNavFixed", isNavFixed)
    }
  }, [isNavFixed])

  useEffect(() => {
    if (!isMobile && typeof window !== "undefined") {
      const handleMouseMove = event => {
        const threshold =
          isNavVisible || isNavFixed
            ? 248
            : Math.max(window.innerWidth * 0.03, 24)
        if (event.clientX < threshold) {
          setIsNavVisible(true)
        } else {
          setIsNavVisible(false)
        }
      }

      window.addEventListener("mousemove", handleMouseMove)
      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [isNavVisible, isNavFixed, isMobile])

  return (
    <NavContext.Provider
      value={{ isNavVisible, setIsNavVisible, isNavFixed, setIsNavFixed }}
    >
      {children}
    </NavContext.Provider>
  )
}
