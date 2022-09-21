import React, { useState } from "react"
import "../styles.scss"
import { graphql } from "gatsby"
import { CardMenu } from "../features/menu/CardMenu"
import { Video } from "../features/Video"

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
    <div
      className="background"
      style={{ backgroundImage: `url(${displayedVideo.backgroundPhoto.url})` }}
    >
      <div className="homepage">
        <Video video={displayedVideo} />
        <CardMenu videos={videos} setdisplayedVideo={setdisplayedVideo} />
      </div>
    </div>
  )
}
