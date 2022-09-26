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
    <div className="displayed-video">
      <div className="displayed-video--iframe">
        <iframe
          width="100%"
          height="100%"
          src={embeddedURL}
          allow="fullscreen"
        ></iframe>
      </div>
      {richText && <p className="displayed-video--description">{richText}</p>}
    </div>
  )
}
