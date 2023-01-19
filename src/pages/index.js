import React, { useState } from "react"
import "../styles.scss"
import { graphql } from "gatsby"
import { Menu } from "../features/Menu"
import { Video } from "../features/Video"
import { Navbar } from "../features/Navbar"

export const query = graphql`
  {
    videos: allContentfulEntry {
      nodes {
        ... on ContentfulVideo {
          id
          title
          slug
          description {
            raw
          }
          url
          image {
            url
            width
          }
          createdAt(locale: "no-no", fromNow: true)
        }
      }
    }
  }
`

export default function Home({ data }) {
  const [videos] = useState(data.videos.nodes)
  const [displayedVideo, setdisplayedVideo] = useState(videos[0])

  return (
    <>
      <Navbar />
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${displayedVideo.image.url})`,
        }}
      ></div>
      <div className="background-image--overlay" />
      <div className="homepage">
        <div className="homepage--content-wrapper">
          <Video video={displayedVideo} />
          <Menu videos={videos} setdisplayedVideo={setdisplayedVideo} />
        </div>
      </div>
    </>
  )
}
