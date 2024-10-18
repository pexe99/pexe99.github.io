const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { frontmatter: { date: ASC } }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              series
              tags
            }
            excerpt
          }
        }
      }
      tagsGroup: allMarkdownRemark {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
          totalCount
        }
      }
      seriesGroup: allMarkdownRemark {
        group(field: { frontmatter: { series: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.postsRemark.edges
  const series = result.data.seriesGroup.group
  const tags = result.data.tagsGroup.group

  // Create individual post pages
  posts.forEach((post, index) => {
    const previous = index === 0 ? null : posts[index - 1].node
    const next = index === posts.length - 1 ? null : posts[index + 1].node

    createPage({
      path: post.node.fields.slug,
      component: path.resolve(`./src/templates/post.jsx`),
      context: {
        id: post.node.id,
        previousPostId: previous ? previous.id : null,
        nextPostId: next ? next.id : null,
      },
    })
  })

  // Create series pages
  series.forEach(singleSeries => {
    const seriesSlug = singleSeries.fieldValue.replace(/\s+/g, "-")
    createPage({
      path: `/series/${seriesSlug}/`,
      component: path.resolve(`./src/templates/series.jsx`),
      context: {
        series: singleSeries.fieldValue,
      },
    })
  })

  // Create tag pages
  tags.forEach(tag => {
    const tagSlug = tag.fieldValue.replace(/\s+/g, "-")
    createPage({
      path: `/tags/${tagSlug}/`,
      component: path.resolve(`./src/templates/tags.jsx`),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
