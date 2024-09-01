import React from "react"
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
  return (
    <ContextProvider>
      <GlobalStyles />
      <LayoutWrapper>
        <NavBar />
        <Main>{children}</Main>
      </LayoutWrapper>
    </ContextProvider>
  )
}

export default Layout
