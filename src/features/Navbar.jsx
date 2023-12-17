import React from "react"
import { Link } from "gatsby"

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar--content">
        <Link to="/" className="logo">
          <img
            src={"/static/talkingcloudsLogo.png"}
            alt="Talking clouds logo"
            className="logo--img"
          />
          <span>TALKING CLOUDS</span>
        </Link>
        <div className="website-info">
          <span>
            <Link to="/about">About</Link>
          </span>
        </div>
      </div>
    </header>
  )
}
