import React from "react"
import "../../styles.scss"

export const Card = ({ video, setdisplayedVideoFunction }) => {
  const { tittel, kortBeskrivelse, createdAt, backgroundPhoto } = video
  return (
    <div
      className="card"
      onClick={() => setdisplayedVideoFunction(video)}
      style={{ backgroundImage: `url(${backgroundPhoto.url})` }}
    >
      <p className="card--title">{tittel}</p>
      <p className="card--description">{kortBeskrivelse}</p>
      <p className="card--date">{createdAt}</p>
    </div>
  )
}
