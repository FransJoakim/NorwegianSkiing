import React from "react"
import "../styles.scss"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { ReactFitty } from "react-fitty"

export const Video = ({ video }) => {
  const embeddedURL = video.url.replace("watch?v=", "embed/") + "?autoplay=1"

  let richText = null
  if (video.description) {
    richText = documentToReactComponents(JSON.parse(video.description.raw))
  }
  return (
    <div className="displayed-video">
      <div className="displayed-video--header">
        <ReactFitty className="displayed-video--header-title">
          {video.title}
        </ReactFitty>
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
          title="Video"
          tabIndex="0"
        ></iframe>
      </div>
      <div className="displayed-video--description">
        <p className="displayed-video--description-date">
          <span>Published:</span> {video.createdAt}
        </p>
        {richText && <div>{richText}</div>}
      </div>
    </div>
  )
}
