import React from "react"
import "../styles.scss"

export const Menu = ({ videos, setdisplayedVideo }) => {
  return (
    <section className="menu">
      {videos.map(video => (
        <Card
          video={video}
          setdisplayedVideoFunction={setdisplayedVideo}
          key={video.id}
        />
      ))}
    </section>
  )
}

export const Card = ({ video, setdisplayedVideoFunction }) => {
  const { tittel, kortBeskrivelse, createdAt, backgroundPhoto } = video
  return (
    <div className="card" onClick={() => setdisplayedVideoFunction(video)}>
      <div className="card--wrapper">
        <div
          className="card--background-image"
          style={{ backgroundImage: `url(${backgroundPhoto.url})` }}
        ></div>
        <div className="card--text">
          <p className="card--text--title">{tittel}</p>
          <p className="card--text--date">{createdAt.toUpperCase()}</p>
        </div>
      </div>
    </div>
  )
}
