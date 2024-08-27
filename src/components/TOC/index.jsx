import React from "react"
import Icon from "../Icon"
import styled from "styled-components"

const TocWrapper = styled.div`
  width: 100%;
  padding: 1rem 1rem 1rem 0.75rem;
  margin: 0.25rem 0;
  border-radius: 0.25rem;
  border: ${props => props.theme.calloutBorder};
  color: ${props => props.theme.icon};
  background-color: transparent;
  display: flex;
  flex-direction: row;
  white-space: pre-wrap;
  word-break: break-word;
  flex-shrink: 0;
  flex-grow: 0;
`

const TocTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0px;
  width: 100%;
  padding: 0 0.125rem;
  margin-left: 0.5rem;
  color: ${props => props.theme.text};
  font-weight: 600;
  line-height: 1.5;
  span {
    margin-bottom: 0.25rem;
  }
`

const HeaderLink = styled.a`
  width: 100%;
  padding: 0.375rem 0 0.375rem 0.125rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.3;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  color: rgb(120, 119, 116);
  &:hover {
    background: rgba(55, 53, 47, 0.06);
  }
  transition: background 20ms ease-in;
  .toc-1 {
    margin-left: 0;
  }
  .toc-2 {
    margin-left: 1.5rem;
  }
  .toc-3 {
    margin-left: 3rem;
  }
`

const LinkInnerText = styled.div`
  width: fit-content;
  background-image: linear-gradient(
    to right,
    rgba(55, 53, 47, 0.16) 0%,
    rgba(55, 53, 47, 0.16) 100%
  );
  background-repeat: repeat-x;
  background-position: 0 100%;
  background-size: 100% 0.0625rem;
`

const TOC = ({ type = "normal", icon = false, title, innerText }) => {
  const handleClickTitle = item => {
    window.location.hash = null
    window.location.hash = item.id
  }

  const generateTocItems = items => {
    let previousLevel = -1

    return items.map((item, index) => {
      let currentLevel = parseInt(item.localName.match(/\d+/)[0], 10)

      if (currentLevel > 1) {
        if (previousLevel === -1) {
          currentLevel = 1
        } else if (currentLevel < previousLevel) {
          previousLevel = currentLevel
        } else if (currentLevel > previousLevel) {
          currentLevel = ++previousLevel
        }
      } else {
        previousLevel = 1
      }

      console.log(currentLevel, previousLevel)

      return (
        <HeaderLink key={index} onClick={() => handleClickTitle(item)}>
          <LinkInnerText className={`toc-${currentLevel}`}>
            {item.innerText}
          </LinkInnerText>
        </HeaderLink>
      )
    })
  }

  return (
    <TocWrapper>
      <Icon iconName="TbTopologyStar3" size="1.5rem" />
      <TocTextWrapper>
        <span>Table of Contents</span>
        {type === "toc" && generateTocItems(innerText)}
      </TocTextWrapper>
    </TocWrapper>
  )
}

export default TOC
