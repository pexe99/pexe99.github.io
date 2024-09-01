import React from "react"
import { graphql } from "gatsby"
import MainTitle from "../components/MainTitle"
import Database from "../components/Database"

const TagTemplate = ({ data, pageContext }) => {
  const { tag } = pageContext
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <MainTitle
        type="main"
        title={`Tag ↘\n${tag}`}
        description={`There are ${posts.length} posts tagged with '${tag}'`}
        icon="TbHash"
      />
      <Database data={posts} tagPost />
    </>
  )
}

export const query = graphql`
  query ($tag: String!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: ASC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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

export default TagTemplate
