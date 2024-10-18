import * as React from "react"
import { Helmet } from "react-helmet"
import { author } from "../../../blog-config.js"

const SEO = ({ title, description, url }) => {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={""} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={""} />
      <meta name="theme-color" content="currentColor" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="transparent"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="mobile-web-app-capable" content="yes" />
    </Helmet>
  )
}

export default SEO
