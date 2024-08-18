import React, { useState } from "react"
import styled from "styled-components"
import PostCard from "./PostCard"
import TabBar from "./TabBar"
import PostBlock from "./PostBlock"

const Title = styled.h2`
  flex: 0 1 auto;
  margin-top: 4rem;
  margin-bottom: 0.25rem;
  padding: 0.25rem 0.125rem;
  font-weight: 600;
  font-size: 1.875rem;
  color: ${props => props.theme.text};
  line-height: 1.3;
`

const GridWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.25rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16.25rem, 1fr));
  gap: 1rem;
`

const ListWrapper = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  display: flex;
  flex-direction: column;
`

const PostList = ({ postInfo }) => {
  const [isGridView, setIsGridView] = useState(true)

  const changeToGrid = () => {
    setIsGridView(true)
  }

  const changeToList = () => {
    setIsGridView(false)
  }

  const renderPosts = () => {
    return postInfo.map(({ node }) => {
      const commonProps = {
        key: node.id,
        to: node.fields.slug,
        title: node.frontmatter.title,
        date: new Date(node.frontmatter.date).toLocaleDateString(),
        icon: node.frontmatter.icon,
        tags: node.frontmatter.tags,
        detail: node.excerpt,
      }

      return isGridView ? (
        <PostCard {...commonProps} />
      ) : (
        <PostBlock {...commonProps} />
      )
    })
  }

  return (
    <>
      <Title>All Posts</Title>
      <TabBar
        isGridView={isGridView}
        changeToGrid={changeToGrid}
        changeToList={changeToList}
      />
      {isGridView ? (
        <GridWrapper>{renderPosts()}</GridWrapper>
      ) : (
        <ListWrapper>{renderPosts()}</ListWrapper>
      )}
    </>
  )
}

export default PostList
