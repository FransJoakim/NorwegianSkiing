import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { Navbar } from "../features/Navbar"

export const query = graphql`
  {
    about: allContentfulAbout {
      nodes {
        id
      }
    }
  }
`

export default function Home({ data, location }) {
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
        <div className="page--content-wrapper">Info about this page</div>
      </div>
    </>
  )
}
