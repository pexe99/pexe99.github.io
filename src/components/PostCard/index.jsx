import React from "react"
import styled from "styled-components"
import { truncateText } from "../../utils/truncateText"

const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 0.75rem 0;
  color: #1d1d1f;
  word-break: keep-all;
  gap: 1.5rem;
  width: 100%;

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
`
const Detail = styled.p`
  display: -webkit-box;
  font-weight: 500;
  font-size: 1rem;
  color: #6e6e73;
`

const PostCard = () => {
  return (
    <CardWrapper>
      <Date>2024/06/07</Date>
      <CardTitle>우리 서비스는 모바일 사절입니다 →</CardTitle>
      <TagsWrapper>
        <Tag>#네이버부스트캠프</Tag>
        <Tag>#공부</Tag>
      </TagsWrapper>
      <Detail>{truncateText(text, 200)}</Detail>
    </CardWrapper>
  )
}

export default PostCard
