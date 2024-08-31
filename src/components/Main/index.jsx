import React, { useContext } from "react"
import Header from "./Header"
import Body from "./Body"
import styled from "styled-components"
import { MobileContext } from "../../contexts/MobileContext"

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  margin-left: ${props =>
    props.$isNavFixed || props.$isMobile ? "0" : "-15.5rem"};
  transition: margin-left 200ms ease, width 200ms ease;
`

const Main = ({ $isVisible, $isNavFixed, setIsNavFixed, children }) => {
  const { isMobile } = useContext(MobileContext)

  return (
    <ContentContainer $isNavFixed={$isNavFixed} $isMobile={isMobile}>
      <Header
        $isVisible={$isVisible}
        $isFixed={$isNavFixed}
        setIsNavFixed={setIsNavFixed}
      />
      <Body>{children}</Body>
    </ContentContainer>
  )
}

export default Main
