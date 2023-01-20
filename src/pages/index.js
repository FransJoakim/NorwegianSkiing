import React from "react"

import { graphql } from "gatsby"

export const query = graphql`
  {
    videos: allContentfulVideo {
      nodes {
        slug
      }
    }
  }
`
export default function Home({ data }) {
  window.location.replace(`/video/${data.videos.nodes[0].slug}/`)
}
