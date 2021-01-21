import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontSize: `24px`,
          }}
        >
          NAME GENERATOR
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
