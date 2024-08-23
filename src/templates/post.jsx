import React from "react"
import { graphql } from "gatsby"
import MainTitle from "../components/MainTitle"

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const { frontmatter, html } = post

  return (
    <>
      <MainTitle
        type="post"
        title={frontmatter.title}
        date={frontmatter.date}
        icon={frontmatter.icon}
        tags={frontmatter.tags}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        icon
        tags
      }
      html
    }
  }
`

export default PostTemplate
