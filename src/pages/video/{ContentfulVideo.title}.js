import React, { useEffect, useState } from "react"
import "../../styles.scss"
import { graphql } from "gatsby"
import { Menu } from "../../features/Menu"
import { Video } from "../../features/Video"
import { Navbar } from "../../features/Navbar"

export const query = graphql`
  {
    videos: allContentfulVideo {
      nodes {
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
`

export default function Home({ data, location }) {
  const [videos] = useState(data.videos.nodes)
  const [displayedVideo, setdisplayedVideo] = useState(videos[0])
  const slug = location.pathname.replace(/\/video\/(.*?)\//, "$1")

  useEffect(() => {
    const queriedVideo = videos.find(video => video.slug === slug)
    setdisplayedVideo(queriedVideo)
  })

  return (
    <>
      <Navbar />
      {displayedVideo && (
        <>
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${displayedVideo.image.url})`,
            }}
          ></div>
          <div className="background-image--overlay" />
          <div className="page">
            <div className="page--content-wrapper">
              <Video video={displayedVideo} />
              <Menu videos={videos} setdisplayedVideo={setdisplayedVideo} />
            </div>
          </div>
        </>
      )}
    </>
  )
}
