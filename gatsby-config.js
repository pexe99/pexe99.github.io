/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `lellowmellow-blog`,
    description: `lellowmellow(DongRyeong Lee)'s tech blog`,
    author: `@LellowMellow`,
    siteUrl: `https://lellowmellow.github.io`,
  },
  plugins: [
    // gatsby plugins
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://lellowmellow.github.io`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lellowmellow-blog`,
        short_name: `lellowmellow`,
        start_url: `/`,
        background_color: `rgb(256, 256, 256)`,
        theme_color: `rgb(256, 256, 256)`,
        display: `minimal-ui`,
        icon: `static/favicon.ico`,
      },
    },
    // transformer
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-gifs",
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              loading: "lazy",
              quality: 100,
              showCaptions: true,
              maxWidth: 708,
              wrapperStyle: "margin: 0.25rem 0; padding: 0;",
            },
          },
          {
            resolve: `gatsby-remark-images-remote`,
            options: {
              loading: "lazy",
              quality: 100,
              showCaptions: true,
              maxWidth: 708,
              wrapperStyle: "margin: 0.25rem 0; padding: 0;",
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: "autolinkHeader",
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              noInlineHighlight: true,
              aliases: {},
              showLineNumbers: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
    // etc
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/contents/posts`,
      },
    },
  ],
}
