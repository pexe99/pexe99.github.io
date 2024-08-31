import React from "react"
import styled from "styled-components"

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
  return (
    <MainContainer>
      <ScrollWrapper>{children}</ScrollWrapper>
    </MainContainer>
  )
}

export default Body
