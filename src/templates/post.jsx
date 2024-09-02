import React from "react"
import { graphql } from "gatsby"
import MainTitle from "../components/MainTitle"
import MarkdownWrapper from "../components/MarkdownWrapper"
import PostLinks from "../components/PostLinks"
import Toc from "src/components/Toc"

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const { frontmatter, html } = post
  const { previous, next } = data

  return (
    <>
      <MainTitle
        type="post"
        title={frontmatter.title}
        date={frontmatter.date}
        icon={frontmatter.icon}
        series={frontmatter.series}
        tags={frontmatter.tags}
      />
      <Toc />
      <MarkdownWrapper html={html} />
      <PostLinks previous={previous} next={next} />
    </>
  )
}

export const query = graphql`
  query ($id: String!, $previousPostId: String, $nextPostId: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        series
        icon
        tags
      }
      html
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

export default PostTemplate
