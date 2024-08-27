// src/components/Nav.jsx
import React, { useContext } from "react"
import styled from "styled-components"
import Icon from "../../Icon"
import { ThemeContext, useTheme } from "../../../contexts/ThemeContext"
import { links, additionalLinks } from "../../../../blog-config"
import { navigate } from "gatsby"

const ICON_LIST = {
  github: "TbBrandGithub",
  linkedin: "TbBrandLinkedin",
  youtube: "TbBrandYoutube",
  x: "TbBrandX",
  threads: "TbBrandThreads",
  instagram: "TbBrandInstagram",
  gmail: "TbBrandGmail",
}
Object.freeze(ICON_LIST)

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

const NavLinks = ({ $setSearchModalActive }) => {
  const { ThemeMode, toggleTheme } = useContext(ThemeContext)

  return (
    <NavButtonWrapper>
      <NavButton onClick={() => $setSearchModalActive(true)}>
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
      <NavButton onClick={() => navigate("/")}>
        <Icon iconName="TbSmartHome" size="1.25rem" />
        <span>Home</span>
      </NavButton>
      <NavButton>
        <Icon iconName="TbLayoutList" size="1.25rem" />
        <span>Series</span>
      </NavButton>

      {Object.keys(links).map(key => {
        if (links[key] !== "") {
          return (
            <NavButton onClick={() => window.open(links[key])} key={key}>
              <Icon iconName={ICON_LIST[key]} size="1.25rem" />
              <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
            </NavButton>
          )
        } else return ""
      })}

      {additionalLinks.map(({ icon, title, url }) => (
        <NavButton onClick={() => window.open(url)} key={title}>
          <Icon iconName={icon} size="1.25rem" />
          <span>{title.charAt(0).toUpperCase() + title.slice(1)}</span>
        </NavButton>
      ))}
    </NavButtonWrapper>
  )
}

export default NavLinks
