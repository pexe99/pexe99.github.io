import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { useLocation } from "@reach/router"

const MainContainer = styled.main`
  width: 100%;
  flex-grow: 0;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.background};
  z-index: 1;
  height: calc(100dvh - 2.75rem);
  max-height: 100%;
  overflow: hidden auto;
  overscroll-behavior: contain;
`

const ScrollWrapper = styled.div`
  position: static !important;
  width: 100%;
  max-width: 47.25rem;
  margin: auto;
  margin-top: 0;
  padding: 0 1.5rem;
  padding-bottom: 30vh;
`

const Body = ({ children }) => {
  const scrollRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0
    }
  }, [location.pathname])

  return (
    <MainContainer ref={scrollRef} key={location.pathname}>
      <ScrollWrapper>{children}</ScrollWrapper>
    </MainContainer>
  )
}

export default Body
