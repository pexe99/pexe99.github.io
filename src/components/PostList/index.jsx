import React from "react"
import styled from "styled-components"
import PostCard from "../PostCard"
import { Link } from "gatsby"

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

const PostList = ({ postInfo }) => {
  return (
    <>
      <Title>My Posts ↘</Title>
      <PostWrapper>
        {postInfo &&
          postInfo.map(({ node }) => (
            <PostCard
              key={node.id}
              to={node.fields.slug}
              title={node.frontmatter.title}
              date={new Date(node.frontmatter.date).toLocaleDateString()}
              tags={node.frontmatter.tags}
              detail={node.excerpt}
            />
          ))}
      </PostWrapper>
    </>
  )
}

export default PostList
