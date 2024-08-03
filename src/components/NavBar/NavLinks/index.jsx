// src/components/Nav.jsx
import React, { useContext } from "react"
import styled from "styled-components"
import Icon from "../../Icon"
import { useTheme } from "../../../contexts/themeContext"

const NavButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  gap: 0.0625rem;
  padding: 0 0.5rem 0.5rem 0.5rem;
  overflow: hidden;
`

const NavButton = styled.button`
  height: 1.875rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  overflow: hidden;
  & > svg {
    flex: 0 0 auto;
    color: ${props => props.theme.weekIcon};
  }
  & > span {
    color: ${props => props.theme.navButtonText};
    font-weight: 500;
    font-size: 0.875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:hover {
    background: ${props => props.theme.navButtonHover};
  }
  &:active {
    background: ${props => props.theme.buttonActive};
  }
  transition: 20ms ease-in 0s;
`

const NavLinks = () => {
  const [ThemeMode, toggleTheme] = useTheme()
  return (
    <NavButtonWrapper>
      <NavButton>
        <Icon iconName="TbSearch" size="1.25rem" />
        <span>Search</span>
      </NavButton>
      <NavButton onClick={() => toggleTheme()}>
        <Icon
          iconName={ThemeMode === "dark" ? "TbSunHigh" : "TbMoonStars"}
          size="1.25rem"
        />
        <span>Change to {ThemeMode === "dark" ? "Light" : "Dark"}</span>
      </NavButton>
      <NavButton>
        <Icon iconName="TbSmartHome" size="1.25rem" />
        <span>Home</span>
      </NavButton>
      <NavButton>
        <Icon iconName="TbLayoutList" size="1.25rem" />
        <span>Series</span>
      </NavButton>
      <NavButton>
        <Icon iconName="TbBrandGithub" size="1.25rem" />
        <span>Github</span>
      </NavButton>
      <NavButton>
        <Icon iconName="TbBrandLinkedin" size="1.25rem" />
        <span>Linkedin</span>
      </NavButton>
      <NavButton>
        <Icon iconName="TbBrandYoutube" size="1.25rem" />
        <span>Youtube</span>
      </NavButton>
    </NavButtonWrapper>
  )
}

export default NavLinks
