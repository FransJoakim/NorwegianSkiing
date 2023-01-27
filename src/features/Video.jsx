import React from "react"
import "../styles.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const Video = ({ video }) => {
  const embeddedURL = video.url.replace("watch?v=", "embed/") + "?autoplay=1"

  let richText = null
  if (video.description) {
    richText = documentToReactComponents(JSON.parse(video.description.raw))
  }
  return (
    <div className="displayed-video">
      <div className="displayed-video--header">
        <h1 className="displayed-video--header-title">{video.title}</h1>
        <p className="displayed-video--header-date">
          Published: {video.createdAt}
        </p>
      </div>
      <div className="displayed-video--iframe">
        <iframe
          width="100%"
          height="100%"
          src={embeddedURL}
          allow="fullscreen"
        ></iframe>
      </div>
      <div className="displayed-video--description">
        <p className="displayed-video--description-date">
          <span>Published:</span> {video.createdAt}
        </p>
        {richText && <p>{richText}</p>}
      </div>
    </div>
  )
}
