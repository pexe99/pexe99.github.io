import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyles from "../GlobalStyles"
import Header from "../Header"
import Body from "../Body"
import NavBar from "../NavBar"
import { ThemeProvider } from "../../contexts/themeContext"

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

const Dimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  z-index: 200;
  overflow: hidden;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px); /* 배경 블러 처리 */
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  margin-left: ${props =>
    props.$isNavFixed || props.$isMobile ? "0" : "-15.5rem"};
  transition: margin-left 200ms ease, width 200ms ease;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const LocalIsNavFixed = window.localStorage.getItem("isNavFixed")
  const [isNavVisible, setIsNavVisible] = useState(false)
  const [isNavFixed, setIsNavFixed] = useState(
    LocalIsNavFixed !== null ? JSON.parse(LocalIsNavFixed) : "true"
  )
  const [isMobile, _] = useState(
    "ontouchstart" in window || navigator.maxTouchPoints > 0
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
    <ThemeProvider>
      <GlobalStyles />
      <LayoutWrapper>
        <NavBar
          $isVisible={isNavVisible}
          $isFixed={isNavFixed}
          $isMobile={isMobile}
          setIsNavFixed={setIsNavFixed}
        />
        {isMobile && isNavFixed && (
          <Dimmer onClick={() => setIsNavFixed(false)} />
        )}
        <ContentContainer $isNavFixed={isNavFixed} $isMobile={isMobile}>
          <Header
            $isVisible={isNavVisible}
            $isFixed={isNavFixed}
            setIsNavFixed={setIsNavFixed}
          />
          <Body>{children}</Body>
        </ContentContainer>
      </LayoutWrapper>
    </ThemeProvider>
  )
}

export default Layout
