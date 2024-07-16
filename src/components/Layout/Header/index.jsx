import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Icon from "../../Icon/index.jsx"

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  background: rgba(245, 245, 247, 0.7);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  height: 5rem;
  z-index: 10;
  transform: ${props =>
    props.isHidden ? "translateY(-5rem)" : "translateY(0)"};
  transition: transform 0.5s ease;
  -webkit-transition: transform 0.5s ease;
  @media (min-width: 52.75rem) {
    padding: 1.5rem 6rem;
  }
`

const HeaderTitle = styled.a`
  font-weight: 700;
  font-size: 1.75rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.06);
  }
  transform-origin: center;
  will-change: transform;
  transition: 0.3s;
`

const MenuBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  @media (min-width: 43.75rem) {
    gap: 1rem;
  }
`

const MenuButton = styled.a`
  width: 1.25rem;
  height: 1.25rem;
  color: #000000;
  background-size: contain;
  transition: all 0.2s ease-in-out;
  font-weight: 600;
  font-size: 1rem;
  span {
    display: none;
  }
  @media (min-width: 43.75rem) {
    width: auto;
    height: auto;
    svg {
      display: none;
    }
    span {
      display: inline-block;
    }
  }

  &:hover {
    transform: scale(1.06);
  }
  transform-origin: center;
  will-change: transform;
  transition: 0.3s;

  cursor: pointer;
`

const ModeSwitchButton = styled.button`
  width: 2rem;
  height: 2rem;
  padding: 0.375rem;
  border-radius: 50%;
  background-color: black;
  color: white;

  &:hover {
    transform: scale(1.06);
  }
  transform-origin: center;
  will-change: transform;
  transition: 0.3s;

  cursor: pointer;
`

const Header = () => {
  const headerRef = useRef(null)
  const scrollY = useRef(window.scrollY)
  const isHidden = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.current > window.scrollY) {
        // scroll up
        headerRef.current.style.transform = "translateY(0)"
        isHidden.current = false
      } else if (scrollY.current < window.scrollY && 100 < window.scrollY) {
        // scroll down
        headerRef.current.style.transform = "translateY(-5rem)"
        isHidden.current = true
      }
      scrollY.current = window.scrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <HeaderWrapper ref={headerRef}>
      <HeaderTitle>LM.dev</HeaderTitle>
      <MenuBar>
        <MenuButton>
          <Icon type="search" />
          <span>Search</span>
        </MenuButton>
        <MenuButton>
          <Icon type="tags" />
          <span>Tags</span>
        </MenuButton>
        <MenuButton>
          <Icon type="series" />
          <span>Series</span>
        </MenuButton>
        <ModeSwitchButton>
          <Icon type="lightMode" />
        </ModeSwitchButton>
      </MenuBar>
    </HeaderWrapper>
  )
}

export default Header
