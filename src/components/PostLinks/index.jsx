import React, { useContext } from "react"
import styled, { css } from "styled-components"
import Icon from "../Icon"
import { navigate } from "gatsby"
import { MobileContext } from "../../contexts/MobileContext"
import { NavContext } from "../../contexts/NavContext"

const PostLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 2rem;
  ${props =>
    props.$isNavFixed &&
    !props.$isMobile &&
    css`
      @media (max-width: 49rem) {
        flex-direction: column;
      }
    `};

  @media (max-width: 33.5rem) {
    flex-direction: column;
  }
`

const PostLink = styled.button`
  flex: 1 1 0;
  min-width: 0;
  padding: 1rem 1rem 1rem 0.75rem;
  border-radius: 0.25rem;
  border: ${props => props.theme.calloutBorder};
  color: ${props => props.theme.icon};
  background-color: transparent;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  cursor: ${props => (props.$isActive ? "pointer" : "default")};
  &:hover {
    background: ${props => props.$isActive && props.theme.buttonHover};
  }
  &:active {
    background: ${props => props.$isActive && props.theme.buttonActive};
  }
  transition: 20ms ease-in 0s;
`

const LinkTextWrapper = styled.div`
  width: 100%;
  padding: 0 0.125rem;
  color: ${props => props.theme.text};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1.5;
  font-size: 1rem;
  span {
    font-size: 0.75rem;
    color: ${props => props.theme.weekText};
  }
`

const PostLinks = ({ previous, next }) => {
  const { isMobile } = useContext(MobileContext)
  const { isNavFixed } = useContext(NavContext)

  const handlePostLinkClick = to => {
    if (to !== null) navigate(to)
  }

  return (
    <PostLinksWrapper $isMobile={isMobile} $isNavFixed={isNavFixed}>
      <PostLink
        $isActive={previous !== null}
        onClick={() => handlePostLinkClick(previous && previous.fields.slug)}
      >
        <Icon
          iconName={previous !== null ? "TbChevronLeft" : "TbSlash"}
          size="1.5rem"
        />
        <LinkTextWrapper style={{ textAlign: "left" }}>
          {previous ? previous.frontmatter.title : "There is no post"}
          <br />
          <span>Previous Post</span>
        </LinkTextWrapper>
      </PostLink>
      <PostLink
        $isActive={next !== null}
        onClick={() => handlePostLinkClick(next && next.fields.slug)}
      >
        <LinkTextWrapper style={{ textAlign: "right" }}>
          {next ? next.frontmatter.title : "There is no post"}
          <br />
          <span>Next Post</span>
        </LinkTextWrapper>
        <Icon
          iconName={next !== null ? "TbChevronRight" : "TbSlash"}
          size="1.5rem"
        />
      </PostLink>
    </PostLinksWrapper>
  )
}

export default PostLinks
