import React, { useEffect } from "react"
import "../styles.scss"
import { graphql } from "gatsby"
import { navigate } from "@reach/router"

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
  console.log("slug", data.videos.nodes[0].slug)

  // navigate(`/video/${data.videos.nodes[0].slug}/`)
  window.location.replace(`/video/${data.videos.nodes[0].slug}/`)

  // useEffect(() => {
  //   navigate(`/video/${data.videos.nodes[0].slug}/`)
  // }, [])
}
