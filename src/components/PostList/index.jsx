import React from "react"
import styled from "styled-components"
import Icon from "../Icon"
import PostCard from "../PostCard"

const Title = styled.h2`
  margin-top: 6rem;
  font-weight: 600;
  font-size: 2.25rem;
`

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: baseline;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (min-width: 43.75rem) {
    margin-top: 3rem;
    gap: 3rem;
  }
`

const PostList = () => {
  return (
    <>
      <Title>My Posts ↘</Title>
      <PostWrapper>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostWrapper>
    </>
  )
}

export default PostList
