import React from "react"

import Layout from "../components/layout"
import Search from "../components/search"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Search />
  </Layout>
)

export default IndexPage
