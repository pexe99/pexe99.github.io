import React from "react"
import styled from "styled-components"

const TocDetailWrapper = styled.div`
  width: 15.125rem;
  max-height: calc(100vh - 17.25rem - 4.5rem);
  display: flex;
  flex-direction: row;
  padding: 0.75rem 0.75rem 0;
  margin-top: -1rem;
  margin-right: 0;
  background-color: ${props => props.theme.background};
  box-shadow: ${props => props.theme.tocBarShadow};
  border: ${props => props.theme.tocBarBorder};
  border-radius: 0.875rem;
  overflow-y: auto;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  z-index: -1;
  visibility: hidden;

  ${props =>
    props.$isHovered &&
    `
      position: static;
      z-index: 100;
      margin-right: 0.625rem;
      opacity: 1;
      visibility: visible;
    `}
  transition: opacity 0.2s ease, margin-right 0.2s ease, visibility 0.2s ease;
`

const ScrollWrapper = styled.div`
  width: 100%;
  padding: 0.375rem;
  display: flex;
  flex-direction: column;
  .toc-1 {
    margin-left: 0;
  }
  .toc-2 {
    margin-left: 0.75rem;
  }
  .toc-3 {
    margin-left: 1.5rem;
  }
  & > :last-child {
    padding-bottom: 0.75rem;
  }
`

const HeaderLink = styled.a`
  max-width: 100%;
  padding: 0.25rem;
  font-size: 0.813rem;
  text-decoration: none;
  user-select: none;
  transition: color 0.15s;
  line-height: 1.3;
  cursor: pointer;
  color: ${props =>
    props.$isActive ? props.theme.blue : props.theme.tocTextWeek};
  border-radius: 0.25rem;
  &:hover {
    background: ${props => props.theme.buttonHover};
    color: ${props => props.theme.text};
  }
  transition: background 20ms ease-in;
`

const TocDetail = ({ tocData, handleClickLink, activeId, $isHovered }) => {
  return (
    <TocDetailWrapper $isHovered={$isHovered}>
      <ScrollWrapper>
        {tocData &&
          tocData.map((item, index) => (
            <HeaderLink
              key={index}
              className={`toc-${item.level}`}
              onClick={() => handleClickLink(item.id)}
              $isActive={item.id === activeId}
            >
              {item.text}
            </HeaderLink>
          ))}
      </ScrollWrapper>
    </TocDetailWrapper>
  )
}

export default TocDetail
