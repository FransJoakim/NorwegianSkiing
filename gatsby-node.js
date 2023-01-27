exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  const contentful = await graphql(`
    query {
      videos: allContentfulVideo {
        nodes {
          slug
        }
      }
    }
  `)

  createRedirect({
    fromPath: `/`,
    toPath: `/video/${contentful.data.videos.nodes[0].slug}/`,
    redirectInBrowser: true,
    isPermanent: true,
  })
}
