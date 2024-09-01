import React, { useContext, useState } from "react"
import styled from "styled-components"
import { graphql, navigate, useStaticQuery } from "gatsby"
import { Dimmer } from "../Dimmer"
import NavHeader from "./NavHeader"
import NavLinks from "./NavLinks"
import NavTags from "./NavTags"
import SearchDialog from "./SearchDialog"
import { MobileContext } from "../../contexts/MobileContext"
import { NavContext } from "../../contexts/NavContext"

const Navigation = styled.nav`
  position: ${props => (props.$isMobile ? "fixed" : "static")};
  width: 15.5rem;
  height: ${props => (props.$isFixed || props.$isMobile ? "100dvh" : "auto")};
  max-height: ${props =>
    !props.$isFixed && !props.$isMobile ? "calc(100dvh - 7.375rem)" : "none"};
  background-color: ${props =>
    props.$isFixed && !props.$isMobile
      ? "transparent"
      : props.theme.navBackground};
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  box-shadow: ${props =>
    props.$isFixed || props.$isMobile
      ? props.theme.navFixedBoxShadow
      : props.theme.navBoxShadow};
  border-radius: ${props =>
    props.$isFixed || props.$isMobile ? "none" : "0 0.5rem 0.5rem 0"};
  visibility: ${props =>
    props.$isVisible || props.$isFixed ? "visible" : "hidden"};
  transform: ${props =>
    props.$isFixed
      ? "none"
      : props.$isVisible
      ? `translateX(0rem) ${
          props.$isMobile ? "translateY(0)" : "translateY(3.6875rem)"
        }`
      : `translateX(-14.25rem) ${
          props.$isMobile ? "translateY(0)" : "translateY(3.6875rem)"
        }`};
  opacity: ${props => (props.$isVisible || props.$isFixed ? 1 : 0)};
  transition: transform 200ms ease, opacity 200ms ease, visibility 200ms ease,
    width 200ms ease, height 200ms ease;
  z-index: 300;
  user-select: none;
  -webkit-user-select: none;

  &:hover {
    .closeButton {
      opacity: 1;
    }
  }
`

const NavBar = () => {
  const { isMobile } = useContext(MobileContext)
  const { isNavFixed, isNavVisible, setIsNavFixed } = useContext(NavContext)
  const [searchModalActive, setSearchModalActive] = useState(false)

  const customNavigate = to => {
    if (isMobile) setIsNavFixed(false)
    navigate(to)
  }

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  const tags = data.allMarkdownRemark.group.map(tag => tag.fieldValue)

  return (
    <>
      {searchModalActive && (
        <SearchDialog $setSearchModalActive={setSearchModalActive} />
      )}
      {isMobile && isNavFixed && (
        <Dimmer onClick={() => setIsNavFixed(false)} />
      )}
      <Navigation
        $isMobile={isMobile}
        $isFixed={isNavFixed}
        $isVisible={isNavVisible}
      >
        <NavHeader />
        <NavLinks
          $setSearchModalActive={setSearchModalActive}
          customNavigate={customNavigate}
        />
        <NavTags tags={tags} customNavigate={customNavigate} />
      </Navigation>
    </>
  )
}

export default NavBar
