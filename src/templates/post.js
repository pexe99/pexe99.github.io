// src/templates/post.js

import React from "react"
import { graphql } from "gatsby"

const PostTemplate = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div>{body}</div>
    </div>
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
