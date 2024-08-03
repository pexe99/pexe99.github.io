// src/templates/post.js

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const PostTemplate = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <div>{body}</div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default PostTemplate
