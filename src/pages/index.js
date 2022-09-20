import React, { useState } from "react"
import "./styles.scss"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { CardMenu } from "../components/CardMenu"

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
  const [videos, setVideos] = useState(data.videos.nodes)
  const [displayedVideo, setdisplayedVideo] = useState(videos[0])

  console.log(displayedVideo)

  return <CardMenu videos={videos} setdisplayedVideo={setdisplayedVideo} />
  // const embeddedURL = video.url.replace("watch?v=", "embed/") + "?autoplay=1"
  // const richText = documentToReactComponents(JSON.parse(video.beskrivelse.raw))

  // return (
  //   <>
  //     <p>{richText}</p>
  //   </>
  //   // <div
  //   //   style={{
  //   //     height: "50vh",
  //   //   }}
  //   // >
  //   //   <iframe width="68%" height="100%" src={embeddedURL}></iframe>
  //   // </div>
  // )
}
