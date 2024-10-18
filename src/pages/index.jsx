import * as React from "react"
import Seo from "../components/Seo"
import MainTitle from "../components/MainTitle"
import Database from "../components/Database/index.jsx"
import { graphql } from "gatsby"
import {
  title,
  description,
  metaDescription,
  mainIcon,
  siteUrl,
} from "../../blog-config.js"

const IndexPage = ({ data }) => {
  const initialPosts = data.allMarkdownRemark.edges

  return (
    <>
      <Seo title={title} description={metaDescription} url={siteUrl} />
      <MainTitle
        type="main"
        title={title}
        description={description}
        icon={mainIcon}
      />
      <Database data={initialPosts} main />
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            icon
            tags
          }
          excerpt(pruneLength: 250)
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
