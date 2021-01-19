import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header
    style={{
      background: `rebeccapurple`,
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
            color: `#E8D5B5`,
            textDecoration: `none`,
          }}
        >
          Name Generator
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
