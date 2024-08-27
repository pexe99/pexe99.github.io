import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import GlobalStyles from "../GlobalStyles"
import NavBar from "../NavBar"
import ContextProvider from "../../contexts"
import Main from "../Main"

const LayoutWrapper = styled.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  overscroll-behavior: none;
  transition: margin-left 200ms ease, width 200ms ease;
  background: ${props => props.theme.layoutBackground};
  overflow: hidden;
`

const Layout = ({ children }) => {
  const LocalIsNavFixed = window.localStorage.getItem("isNavFixed")
  const [isNavVisible, setIsNavVisible] = useState(false)
  const [isNavFixed, setIsNavFixed] = useState(
    LocalIsNavFixed !== null ? JSON.parse(LocalIsNavFixed) : "true"
  )

  useEffect(() => {
    window.localStorage.setItem("isNavFixed", isNavFixed)
  }, [isNavFixed])

  useEffect(() => {
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
  }, [isNavVisible, isNavFixed])

  return (
    <ContextProvider>
      <GlobalStyles />
      <LayoutWrapper>
        <NavBar
          $isVisible={isNavVisible}
          $isFixed={isNavFixed}
          setIsNavFixed={setIsNavFixed}
        />
        <Main
          $isVisible={isNavVisible}
          $isNavFixed={isNavFixed}
          setIsNavFixed={setIsNavFixed}
        >
          {children}
        </Main>
      </LayoutWrapper>
    </ContextProvider>
  )
}

export default Layout
