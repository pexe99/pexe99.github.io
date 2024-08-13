import React, { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyles from "../GlobalStyles"
import Header from "../Header"
import Body from "../Body"
import NavBar from "../NavBar"
import { lightTheme, darkTheme } from "../../themes/colors"
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

  const [isNavVisible, setIsNavVisible] = useState(false)
  const [isNavFixed, setIsNavFixed] = useState(false)
  const [isMobile, setIsMobile] = useState(
    "ontouchstart" in window || navigator.maxTouchPoints > 0
  )

  const handleMouseMove = event => {
    const threshold =
      isNavVisible || isNavFixed ? 248 : Math.max(window.innerWidth * 0.03, 24)
    if (event.clientX < threshold) {
      setIsNavVisible(true)
    } else {
      setIsNavVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isNavVisible])

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
