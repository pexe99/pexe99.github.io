// src/components/PostCard.js
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { truncateText } from "../../utils/truncateText"

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 0.75rem 0;
  color: #1d1d1f;
  word-break: keep-all;
  gap: 1.5rem;
  width: 100%;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
  transform-origin: center;
  will-change: transform;
  transition: 0.3s;

  @media (min-width: 43.75rem) {
    width: calc(50% - 1.5rem);
  }
`

const Date = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  color: #6e6e73;
`

const CardTitle = styled.p`
  font-weight: 700;
  font-size: 1.75rem;
`

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  gap: 0.375rem;
`

const Tag = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  height: 32px;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  background-color: #1d1d1f;
  border-radius: 16px;

  &:hover {
    transform: scale(1.04);
  }
  transform-origin: center;
  will-change: transform;
  transition: 0.3s;
`
const Detail = styled.p`
  display: -webkit-box;
  font-weight: 500;
  font-size: 1rem;
  color: #6e6e73;
`

const PostCard = ({ to, title, date, tags, detail }) => {
  return (
    <CardWrapper as={Link} to={to}>
      <Date>{date}</Date>
      <CardTitle>{title} →</CardTitle>
      <TagsWrapper>
        {tags && tags.map(tag => <Tag key={tag}>#{tag}</Tag>)}
      </TagsWrapper>
      <Detail>{truncateText(detail, 200)}</Detail>
    </CardWrapper>
  )
}

export default PostCard
