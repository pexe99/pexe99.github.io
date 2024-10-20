// src/components/PostCard.js
import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { truncateText } from "../../../utils/truncateText"
import Icon from "../../Icon"

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  color: ${props => props.theme.text};
  text-decoration: none;
  line-height: 1.5;
  cursor: pointer;
  box-shadow: ${props => props.theme.cardShadow};
  border-radius: 0.25rem;
  background: ${props => props.theme.cardBackground};
  overflow: hidden;
  flex-direction: column;
  &:hover {
    background: ${props => props.theme.cardHover};
  }
  &:active {
    background: ${props => props.theme.cardActive};
  }
  transition: 20ms ease-in 0s;
  user-select: none;
  -webkit-user-select: none;
`

const CardThumbnail = styled.div`
  width: 100%;
  height: 12rem;
  background: ${props => props.theme.text};
  color: ${props => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.p`
  font-size: 0.875rem;
  width: 100%;
  padding: 0.5rem 0.625rem 0.375rem;
  line-height: 1.5;
  font-weight: 500;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  padding: 0 0.375rem 0.75rem;
`

const InfoText = styled.p`
  width: 100%;
  font-size: 0.75rem;
  padding: 0 0.375rem;
  line-height: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  gap: 0.375rem;
  padding: 0.25rem 0.375rem;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &:-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`

const Tag = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 1.125rem;
  border-radius: 0.25rem;
  padding: 0 0.375rem;
  font-size: 0.75rem;
  white-space: nowrap;
  background: ${props => props.theme.tag};
  outline: 0.25rem solid #0000;
  color: ${props => props.theme.text};
  &:hover {
    outline: 0.25rem solid ${props => props.theme.buttonHover};
  }
  &:active {
    outline: 0.25rem solid ${props => props.theme.buttonActive};
  }
  transition: 20ms ease-in 0s;
`

const CardBlock = ({ to, title, date, icon, tags, detail }) => {
  const handleTagClicked = (to, event) => {
    event.stopPropagation()
    navigate(`/tags/${to.replace(/\s+/g, "-")}/`)
  }

  return (
    <CardWrapper onClick={() => navigate(to)}>
      <CardThumbnail>
        <Icon iconName={icon} size="2rem" />
      </CardThumbnail>
      <Title>{title}</Title>
      <InfoWrapper>
        <InfoText>{date}</InfoText>
        <TagsWrapper>
          {tags &&
            tags.map(tag => (
              <Tag key={tag} onClick={event => handleTagClicked(tag, event)}>
                {tag}
              </Tag>
            ))}
        </TagsWrapper>
        <InfoText>{truncateText(detail, 200)}</InfoText>
      </InfoWrapper>
    </CardWrapper>
  )
}

export default CardBlock
