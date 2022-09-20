import React from "react"

export const Card = ({ video, setdisplayedVideoFunction }) => {
  const { id, tittel, kortBeskrivelse, backgroundPhoto, createdAt } = video
  return (
    <div onClick={() => setdisplayedVideoFunction(video)}>
      <p>{tittel}</p>
      <p>{kortBeskrivelse}</p>
      <p>{createdAt}</p>
      <img src={backgroundPhoto.url} />
    </div>
  )
}
