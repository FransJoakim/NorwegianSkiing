import React from "react"
import { Link, graphql } from "gatsby"
import { Navbar } from "../features/Navbar"

export const query = graphql`
  {
    videos: allContentfulVideo {
      nodes {
        slug
      }
    }
  }
`

export default function NotFound({ data, location }) {
  return (
    <>
      <Navbar />
      <div
        className="background-image"
        style={{
          backgroundImage: "url('./images/cross-country-skier-norway.webp')",
        }}
      ></div>
      <div className="background-image--overlay" />
      <div className="page">
        <div className="pageNotFound">
          <Link to={`/video/${data.videos.nodes[0].slug}/`}>
            <h1>PAGE NOT FOUND</h1>
            <p>Go to homepage</p>
          </Link>
        </div>
      </div>
    </>
  )
}
