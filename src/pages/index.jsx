import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import MainTitle from "../components/MainTitle"
import PostList from "../components/PostList"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const initialPosts = data.allMdx.edges

  return (
    <>
      <Layout>
        <MainTitle />
        <PostList postInfo={initialPosts} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
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

export const Head = () => <Seo title="Home" />
export default IndexPage
