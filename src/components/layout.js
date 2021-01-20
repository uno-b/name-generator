import React from "react"

import Header from "./header"
import Footer from "./footer"
import styles from "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
