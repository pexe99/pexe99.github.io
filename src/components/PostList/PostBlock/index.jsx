// src/components/PostCard.js
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Icon from "../../Icon"

const BlockWrapper = styled.a`
  width: 100%;
  height: 1.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  border-radius: 0.25rem;
  color: ${props => props.theme.weekIcon};
  background: ${props => props.theme.background};
  overflow: hidden;
  margin: 0.0625rem 0;
  padding: 0 0.25rem;
  flex-direction: row;
  &:hover {
    background: ${props => props.theme.buttonHover};
  }
  &:active {
    background: ${props => props.theme.buttonActive};
  }
  & > * {
    flex: 0 0 auto;
  }
  transition: 20ms ease-in 0s;
`

const Title = styled.span`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  color: ${props => props.theme.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
`

const InfoText = styled.span`
  font-size: 0.75rem;
  padding: 0 0.375rem;
  line-height: 1.5;
  color: ${props => props.theme.text};
`

const PostBlock = ({ to, title, date, tags, detail }) => {
  return (
    <BlockWrapper as={Link} to={to}>
      <Icon iconName="" size="1.375rem" />
      <Title>{title}</Title>
      <InfoText>{date}</InfoText>
    </BlockWrapper>
  )
}

export default PostBlock
