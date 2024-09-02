import React, { useContext } from "react"
import styled from "styled-components"
import Icon from "../../Icon"
import { navigate } from "gatsby"
import { mainIcon, blogName } from "../../../../blog-config.js"
import { NavContext } from "../../../contexts/NavContext"
import { ToastContext } from "../../../contexts/ToastContext/index.jsx"

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

const MainTitleButton = styled.button`
  padding: 0 0.375rem;
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0.25rem;
  line-height: 1.2;
  font-size: 0.875rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  gap: 0.375rem;
  color: ${props => props.theme.icon};
  span {
    padding-top: 0.125rem;
    color: ${props => props.theme.text};
  }
  &:hover {
    background: ${props => props.theme.buttonHover};
  }
  &:active {
    background: ${props => props.theme.buttonActive};
  }
  transition: 20ms ease-in 0s;
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

const Header = () => {
  const { isNavVisible, isNavFixed, setIsNavFixed } = useContext(NavContext)
  const { addToast } = useContext(ToastContext)

  const handleShareButtonClicked = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => addToast("Copy link complete"))
      .catch(err => alert("COPY FAILED ", err))
  }

  return (
    <HeaderWrapper>
      {!isNavFixed && (
        <MenuButtonWrapper>
          <MenuButton onClick={() => setIsNavFixed(true)}>
            <MenuIcon
              iconName="TbMenu2"
              size="1.375rem"
              $isVisible={!isNavVisible}
            />
            <MenuIcon
              iconName="TbChevronsRight"
              size="1.375rem"
              $isVisible={isNavVisible}
            />
          </MenuButton>
        </MenuButtonWrapper>
      )}
      <MainTitleButton onClick={() => navigate("/")}>
        <Icon iconName={mainIcon} size="1.375rem" />
        <span>{blogName}</span>
      </MainTitleButton>
      <MiddleContainer />
      <ShareButton onClick={() => handleShareButtonClicked()}>
        <span>Share</span>
      </ShareButton>
    </HeaderWrapper>
  )
}

export default Header
