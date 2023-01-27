import React from "react"
import { FaSnowflake } from "react-icons/fa"
import { Link } from "gatsby"

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar--content">
        <Link to="/" className="logo">
          <FaSnowflake size={60} />
          <span>Norwegian ski</span>
        </Link>
        <div className="website-info">
          <span>
            <Link to="/about">About</Link>
          </span>
          <span>
            <Link to="/about">Contact</Link>
          </span>
        </div>
      </div>
    </header>
  )
}
