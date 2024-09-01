import React from "react"
import MainTitle from "../components/MainTitle"
import { graphql } from "gatsby"
import PostList from "../components/PostList"

const SeriesPage = ({ data }) => {
  const seriesList = data.allMarkdownRemark.group
  return (
    <>
      <MainTitle
        type="main"
        title="Series"
        description={`${seriesList.length} series to dive into in this blog.`}
        icon="TbLayoutList"
      />
      <PostList postInfo={seriesList} isSeries />
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___series) {
        fieldValue
        totalCount
      }
    }
  }
`

export default SeriesPage
