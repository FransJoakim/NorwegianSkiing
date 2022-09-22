import React, { useState } from "react"
import "../styles.scss"
import { graphql } from "gatsby"
import { Menu } from "../features/Menu"
import { Video } from "../features/Video"
import { Navbar } from "../features/navbar"
import { StaticImage } from "gatsby-plugin-image"

export const query = graphql`
  {
    videos: allContentfulVideo {
      nodes {
        id
        url
        tittel
        kortBeskrivelse
        createdAt(locale: "no-no", fromNow: true)
        beskrivelse {
          raw
        }
        backgroundPhoto {
          url
          width
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
          backgroundImage: `url(${displayedVideo.backgroundPhoto.url})`,
        }}
      ></div>
      <div className="background-image--overlay" />
      <div className="homepage">
        <div className="homepage--content-wrapper">
          <Video video={displayedVideo} />
          <Menu videos={videos} setdisplayedVideo={setdisplayedVideo} />
        </div>
      </div>
      <footer className="footer">
        <StaticImage
          src="../images/norwegian-dutch-flags.png"
          alt="norwegian flag"
          className="footer--image"
        />
      </footer>
    </>
  )
}
