import React from "react"
import "../styles.scss"

export const Menu = ({ videos }) => {
  return (
    <section className="menu">
      <>
        {videos.map(video => (
          <Card video={video} key={video.slug} />
        ))}
        <div className="menu--background" />
      </>
    </section>
  )
}

export const Card = ({ video }) => {
  const { title, slug, image, createdAt } = video
  const redirect = () => {
    window.location.replace(`/video/${slug}/`)
  }

  return (
    <div className="card" onClick={redirect}>
      <div className="card--wrapper">
        <div
          className="card--background-image"
          style={{ backgroundImage: `url(${image.url})` }}
        ></div>
        <div className="card--text">
          <p className="card--text--title">{title}</p>
          <p className="card--text--date">{createdAt.toUpperCase()}</p>
        </div>
      </div>
    </div>
  )
}
