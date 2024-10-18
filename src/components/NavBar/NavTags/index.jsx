// src/components/Nav.jsx
import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import Icon from "../../Icon"

const Divider = styled.div`
  width: 100%;
  height: 0.125rem;
  margin-top: -0.125rem;
  &.scrolled {
    box-shadow: ${props => props.theme.navTagDivider};
  }
  transition: box-shadow 300ms;
`

const TagWrapper = styled.div`
  width: 100%;
  flex: 1 1 auto;
  padding: 0.375rem 0.5rem 1.25rem 0.5rem;
  overflow: hidden auto;
  overscroll-behavior: contain;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  gap: 0.0625rem;
`

const TagTitle = styled.div`
  flex: 0 0 auto;
  padding: 0 0.5rem;
  height: 1.875rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 0.75rem;
  color: ${props => props.theme.weekIcon};
`

const TagButton = styled.button`
  flex: 0 0 auto;
  position: relative;
  height: 1.875rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  overflow: hidden;
  & > span {
    color: ${props => props.theme.navButtonText};
    font-weight: 500;
    font-size: 0.875rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & > .tagIcon {
    opacity: 1;
    flex: 0 0 auto;
    color: ${props => props.theme.navTagIcon};
    transition: opacity 200ms ease;
  }
  & > .arrowIcon {
    opacity: 0;
    flex: 0 0 auto;
    color: ${props => props.theme.navTagIcon};
    transition: opacity 200ms ease;
    position: absolute;
    left: 0.625rem;
  }
  &:hover {
    background: ${props => props.theme.navButtonHover};
    & > .tagIcon {
      opacity: 0;
    }
    & > .arrowIcon {
      opacity: 1;
    }
  }
  &:active {
    background: ${props => props.theme.buttonActive};
  }
  transition: background 20ms ease-in 0s;
`

const NavTags = ({ tags, customNavigate }) => {
  const navRef = useRef(null)
  const dividerRef = useRef(null)

  useEffect(() => {
    const currentNav = navRef.current
    const currentDivider = dividerRef.current

    const handleScroll = () => {
      if (currentNav && currentNav.scrollTop > 0) {
        if (currentDivider) currentDivider.classList.add("scrolled")
      } else if (currentDivider) {
        currentDivider.classList.remove("scrolled")
      }
    }
    currentNav.addEventListener("scroll", handleScroll)
    return () => {
      currentNav.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <Divider ref={dividerRef} />
      <TagWrapper ref={navRef}>
        <TagTitle>Tags</TagTitle>
        {tags?.map(tag => (
          <TagButton
            key={tag}
            onClick={() => customNavigate(`/tags/${tag.replace(/\s+/g, "-")}/`)}
          >
            <Icon className="tagIcon" iconName="TbHash" size="1.25rem" />
            <Icon className="arrowIcon" iconName="TbChevronRight" size="1rem" />
            <span>{tag}</span>
          </TagButton>
        ))}
      </TagWrapper>
    </>
  )
}

export default NavTags
