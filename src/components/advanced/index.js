import React, { useState } from "react"
import styles from "./advanced.module.css"

const Advanced = ({
  FNStartsWith,
  FNEndsWith,
  LNStartsWith,
  LNEndsWith,
  setFNStartsWith,
  setFNEndsWith,
  setLNStartsWith,
  setLNEndsWith,
}) => {
  const handleFNStartsWith = e => {
    {
      setFNStartsWith(e.target.value)
    }
  }

  const handleFNEndsWith = e => {
    {
      setFNEndsWith(e.target.value)
    }
  }

  const handleLNStartsWith = e => {
    {
      setLNStartsWith(e.target.value)
    }
  }

  const handleLNEndsWith = e => {
    {
      setLNEndsWith(e.target.value)
    }
  }

  return (
    <>
      <h3 className={styles.warning}>Fields are case sensitive.</h3>
      <div className={styles.container}>
        <div className={styles.nameContainer}>
          <h2>First name</h2>
          <div className={styles.optionItem}>
            <h5>Starts with: </h5>
            <input
              type="text"
              value={FNStartsWith}
              onChange={handleFNStartsWith}
            />
          </div>
          <div className={styles.optionItem}>
            <h5>Ends with: </h5>
            <input type="text" value={FNEndsWith} onChange={handleFNEndsWith} />
          </div>
        </div>

        <div className={styles.nameContainer}>
          <h2>Last name</h2>
          <div className={styles.optionItem}>
            <h5>Starts with: </h5>
            <input
              type="text"
              value={LNStartsWith}
              onChange={handleLNStartsWith}
            />
          </div>
          <div className={styles.optionItem}>
            <h5>Ends with: </h5>
            <input type="text" value={LNEndsWith} onChange={handleLNEndsWith} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Advanced
