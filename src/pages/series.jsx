import React from "react"
import Seo from "../components/Seo"
import MainTitle from "../components/MainTitle"
import Database from "../components/Database"
import { graphql } from "gatsby"
import { metaDescription, siteUrl } from "../../blog-config.js"

const SeriesPage = ({ data }) => {
  const seriesList = data.allMarkdownRemark.group
  return (
    <>
      <Seo
        title="Series"
        description={metaDescription}
        url={`${siteUrl}/series/`}
      />
      <MainTitle
        type="main"
        title="Series"
        description={`${seriesList.length} series to dive into in this blog.`}
        icon="TbLayoutList"
      />
      <Database data={seriesList} series />
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      group(field: { frontmatter: { series: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`

export default SeriesPage
