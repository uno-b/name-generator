import React from "react"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()}. All rights reserved.
    </footer>
  )
}

export default Footer
