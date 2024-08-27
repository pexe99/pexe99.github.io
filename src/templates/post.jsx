import React from "react"
import { graphql } from "gatsby"
import TOC from "../components/TOC"
import MainTitle from "../components/MainTitle"
import MarkdownWrapper from "../components/MarkdownWrapper"

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
      <TOC />
      <MarkdownWrapper html={html} />
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
