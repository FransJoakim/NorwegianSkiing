import React from "react"
import { Card } from "./Card"

export const CardMenu = ({ videos, setdisplayedVideo }) => {
  return (
    <div className="card-menu">
      {videos.map(video => (
        <Card
          video={video}
          setdisplayedVideoFunction={setdisplayedVideo}
          key={video.id}
        />
      ))}
    </div>
  )
}
