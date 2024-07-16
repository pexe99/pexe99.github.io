/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyles from "../GlobalStyles"
import Header from "./Header"
import { Body } from "./Body"
import { ThemeProvider } from "styled-components"
import { light, dark } from "../../themes/colors"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Header />
      <Body>{children}</Body>
    </>
  )
}

export default Layout
