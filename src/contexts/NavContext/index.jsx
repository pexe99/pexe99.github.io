import React, { createContext, useState, useEffect, useContext } from "react"
import { MobileContext } from "../MobileContext"

export const NavContext = createContext()

export const NavProvider = ({ children }) => {
  const { isMobile } = useContext(MobileContext)
  const LocalIsNavFixed = window.localStorage.getItem("isNavFixed")
  const [isNavVisible, setIsNavVisible] = useState(false)
  const [isNavFixed, setIsNavFixed] = useState(
    LocalIsNavFixed !== null
      ? JSON.parse(LocalIsNavFixed)
      : isMobile
      ? false
      : true
  )

  useEffect(() => {
    window.localStorage.setItem("isNavFixed", isNavFixed)
  }, [isNavFixed])

  useEffect(() => {
    if (!isMobile) {
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
