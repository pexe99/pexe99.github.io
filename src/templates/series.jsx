import React from "react"
import { graphql } from "gatsby"
import MainTitle from "../components/MainTitle"
import Database from "../components/Database"

const SeriesTemplate = ({ data, pageContext }) => {
  const { series } = pageContext
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <MainTitle
        type="main"
        title={`Series ↗\n${series}`}
        description={`There are ${posts.length} posts in the '${series}' series`}
        icon="TbFolderOpen"
      />
      <Database data={posts} seriesPost />
    </>
  )
}

export const query = graphql`
  query ($series: String!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: ASC } }
      filter: { frontmatter: { series: { eq: $series } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            icon
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default SeriesTemplate
