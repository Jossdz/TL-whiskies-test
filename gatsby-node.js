const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query MyQuery {
      allWhiskiesJson {
        edges {
          node {
            region
            cost
            id
            image
            title
            uri
            tasting_notes
          }
        }
        distinct(field: region)
      }
    }
  `)

  result.data.allWhiskiesJson.edges.forEach(({ node }) => {
    node.title = node.title.toLowerCase()
    createPage({
      path: node.title,
      component: path.resolve(`./src/templates/single.js`),
      context: {
        node,
      },
    })
  })
}
