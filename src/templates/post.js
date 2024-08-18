// src/templates/post.js

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import MainTitle from "../components/MainTitle"

const PostTemplate = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx

  return (
    <Layout>
      <MainTitle
        type="post"
        title={frontmatter.title}
        date={frontmatter.date}
        icon={frontmatter.icon}
        tags={frontmatter.tags}
      />
      <div>{body.html}</div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        icon
        tags
      }
      body
    }
  }
`

export default PostTemplate
