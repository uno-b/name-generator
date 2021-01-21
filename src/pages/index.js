import React from "react"

import Layout from "../components/layout"
import Search from "../components/search"
import SEO from "../components/seo"
import Background from "../images/Background.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img
      src={Background}
      style={{
        position: `fixed`,
        top: `0`,
        left: `0`,
        zIndex: `-1`,
        width: `100%`,
        height: `100%`,
      }}
    />
    <Search />
  </Layout>
)

export default IndexPage
