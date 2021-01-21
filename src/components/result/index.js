import React from "react"
import styles from "./result.module.css"

const Result = ({ name }) => {
  const { firstName, lastName, middleInitial } = name

  return (
    <div className={styles.resultContainer}>
      {firstName && lastName && middleInitial ? (
        <h1>{`${firstName} ${lastName}`}</h1>
      ) : (
        <h1></h1>
      )}
    </div>
  )
}

export default Result
