import React from "react"
import styled from "styled-components"
import Icon from "../Icon/index.jsx"

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  background: ${props => props.theme.background};
  padding: 0rem 0.75rem;
  height: 2.75rem;
  z-index: 100;
  user-select: none;
  -webkit-user-select: none;
`

const MenuButtonWrapper = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  padding: 0.625rem;
  margin-left: -0.75rem;
  flex: 0 0 auto;
`

const MenuButton = styled.button`
  border-radius: 0.25rem;
  width: 100%;
  height: 100%;
  padding: 0.125rem;
  color: ${props => props.theme.icon};
  &:hover {
    background: ${props => props.theme.buttonHover};
  }
  &:active {
    background: ${props => props.theme.buttonActive};
  }
  position: relative;
  transition: 20ms ease-in 0s;
`

const MenuIcon = styled(Icon)`
  position: absolute;
  top: 0.0625rem;
  left: 0.0625rem;
  opacity: ${props => (props.$isVisible ? 1 : 0)};
  transition: opacity 200ms ease;
`

const MiddleContainer = styled.div`
  flex: 1 1 auto;
`

const ShareButton = styled.button`
  flex: 0 0 auto;
  border-radius: 0.25rem;
  padding: 0 0.5rem;
  height: 1.75rem;
  color: ${props => props.theme.text};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.2;
  &:hover {
    background: ${props => props.theme.buttonHover};
  }
  &:active {
    background: ${props => props.theme.buttonActive};
  }
  transition: 20ms ease-in 0s;
`

const Header = ({ $isVisible, $isFixed, setIsNavFixed }) => {
  return (
    <HeaderWrapper>
      {!$isFixed && (
        <MenuButtonWrapper>
          <MenuButton onClick={() => setIsNavFixed(true)}>
            <MenuIcon
              iconName="TbMenu2"
              size="1.375rem"
              $isVisible={!$isVisible}
            />
            <MenuIcon
              iconName="TbChevronsRight"
              size="1.375rem"
              $isVisible={$isVisible}
            />
          </MenuButton>
        </MenuButtonWrapper>
      )}
      <MiddleContainer />
      <ShareButton>
        <span>Share</span>
      </ShareButton>
    </HeaderWrapper>
  )
}

export default Header
