import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import MainTitle from "../components/MainTitle"
import Database from "../components/Database"
import { metaDescription, siteUrl } from "../../blog-config"

const SeriesTemplate = ({ data, pageContext }) => {
  const { series } = pageContext
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <Seo
        title={`Series↗${series}`}
        description={metaDescription}
        url={`${siteUrl}/series/${series}/`}
        icon="TbFolderOpen"
      />
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
