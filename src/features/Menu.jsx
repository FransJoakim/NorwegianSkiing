import React from "react"
import { Link } from "gatsby"
import "../styles.scss"

export const Menu = ({ videos }) => {
  return (
    <section className="menu">
      {videos.map(video => (
        <Card video={video} key={video.slug} />
      ))}
    </section>
  )
}

export const Card = ({ video }) => {
  const { title, slug, image, createdAt } = video
  return (
    <Link className="card" to={`/video/${slug}`}>
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
    </Link>
  )
}
