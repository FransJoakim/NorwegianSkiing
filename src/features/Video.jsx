import React from "react"
import "../styles.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const Video = ({ video }) => {
  const embeddedURL = video.url.replace("watch?v=", "embed/") + "?autoplay=1"

  let richText = null
  if (video.beskrivelse) {
    richText = documentToReactComponents(JSON.parse(video.beskrivelse.raw))
  }
  return (
    <div className="homepage--displayedContent">
      <div className="video">
        <iframe width="100%" height="100%" src={embeddedURL}></iframe>
      </div>
      {richText && <p>{richText}</p>}
    </div>
  )
}
