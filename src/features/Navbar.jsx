import React from "react"
import { FaSnowflake } from "react-icons/fa"

export const Navbar = () => {
  return (
    <header className="navbar">
      {/* <div className="navbar--overlay" /> */}
      <div className="navbar--content">
        <div className="logo">
          <FaSnowflake size={60} />
          <span>Norwegian skiing</span>
        </div>
        <div className="website-info">
          <span>About</span>
          <span>Contact</span>
        </div>
      </div>
    </header>
  )
}
