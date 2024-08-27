// src/components/Nav.jsx
import React from "react"
import styled from "styled-components"
import Icon from "../../Icon"
import { blogIcon, blogName } from "../../../../blog-config.js"

const HeaderWrapper = styled.div`
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.375rem;
  border-radius: 0.375rem;
`

const BlogTitle = styled.div`
  flex: 1 1 auto;
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const IconWrapper = styled.div`
  color: ${props => props.theme.icon};
  margin-top: 0.0625rem;
  position: relative;
`

const RedDot = styled.div`
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  top: -0.0625rem;
  right: -0.0625rem;
  position: absolute;
  background: ${props => props.theme.red};
`

const HeaderButton = styled.button`
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  padding: 0;
  margin-right: 0.125rem;
  flex: 0 0 auto;
  color: ${props => props.theme.icon};
  &:hover {
    background: ${props => props.theme.navButtonHover};
  }
  &:active {
    background: ${props => props.theme.buttonActive};
  }
  & > .closeButton {
    opacity: 0;
    color: ${props => props.theme.weekIcon};
    transition: opacity 200ms ease;
    &:hover {
      color: ${props => props.theme.icon};
    }
  }
  transition: 20ms ease-in 0s;
`

const NavHeader = ({ $isFixed, $isMobile, changeNavStatic }) => (
  <HeaderWrapper>
    <BlogTitle>
      <IconWrapper>
        <Icon iconName={blogIcon} size="1.375rem" />
        <RedDot />
      </IconWrapper>
      <span>{blogName}</span>
    </BlogTitle>
    {$isFixed && !$isMobile && (
      <HeaderButton onClick={changeNavStatic}>
        <Icon
          iconName="TbChevronsLeft"
          className="closeButton"
          size="1.375rem"
        />
      </HeaderButton>
    )}
    <HeaderButton>
      <Icon iconName="TbEdit" size="1.25rem" />
    </HeaderButton>
  </HeaderWrapper>
)

export default NavHeader
