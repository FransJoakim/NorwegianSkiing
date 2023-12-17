import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Navbar } from "../features/Navbar"

export const query = graphql`
  {
    about: allContentfulAbout {
      nodes {
        main {
          raw
        }
        title
        image {
          url
          width
        }
      }
    }
  }
`

export default function About({ data, location }) {
  const json = data.about.nodes[0]
  const richText = documentToReactComponents(JSON.parse(json.main.raw))
  return (
    <>
      <Navbar />
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${json.image.url})`,
        }}
      ></div>
      <div className="background-image--overlay" />
      <div className="page">
        <div className="about">
          <h1>{json.title}</h1>
          {richText && <div>{richText}</div>}
        </div>
      </div>
    </>
  )
}
