import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import styles from "./search.module.css"
import Advanced from "../advanced"
import Result from "../result"

const Search = () => {
  {
    /* Define states */
  }
  const [isAdvanced, setIsAdvanced] = useState(false)
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    middleInitial: "",
  })

  const [FNStartsWith, setFNStartsWith] = useState("")
  const [FNEndsWith, setFNEndsWith] = useState("")
  const [LNStartsWith, setLNStartsWith] = useState("")
  const [LNEndsWith, setLNEndsWith] = useState("")

  {
    /* Get array of the names and store them locally */
  }
  const data = useStaticQuery(graphql`
    {
      allNameGeneratorXlsxNames {
        edges {
          node {
            First_Name
            Last_Name
            Middle_Initial
          }
        }
      }
    }
  `)
  const array = data.allNameGeneratorXlsxNames.edges

  useEffect(() => {
    setFNStartsWith("")
    setFNEndsWith("")
    setLNStartsWith("")
    setLNEndsWith("")
  }, [isAdvanced])

  {
    /* Local functions for getting names */
  }

  const getFirstName = () => {
    let newArray = []

    newArray = array.filter(item => {
      if (item.node.First_Name.startsWith(FNStartsWith)) {
        return true
      } else {
        return false
      }
    })

    newArray = newArray.filter(item => {
      if (item.node.First_Name.endsWith(FNEndsWith)) {
        return true
      } else {
        return false
      }
    })

    const randomInt = Math.floor(Math.random() * newArray.length)

    if (newArray[randomInt]) {
      return newArray[randomInt].node.First_Name
    } else {
      return "N/A"
    }
  }

  const getLastName = () => {
    let newArray = []

    newArray = array.filter(item => {
      if (item.node.Last_Name.startsWith(LNStartsWith)) {
        return true
      } else {
        return false
      }
    })

    newArray = newArray.filter(item => {
      if (item.node.Last_Name.endsWith(LNEndsWith)) {
        return true
      } else {
        return false
      }
    })

    const randomInt = Math.floor(Math.random() * newArray.length)

    if (newArray[randomInt]) {
      return newArray[randomInt].node.Last_Name
    } else {
      return "N/A"
    }
  }

  const getMiddleInitial = () => {
    const randomInt = Math.floor(Math.random() * 26)

    return array[randomInt].node.Middle_Initial
  }

  const generate = () => {
    {
      setName({
        firstName: getFirstName(),
        lastName: getLastName(),
        middleInitial: getMiddleInitial(),
      })
    }
  }

  return (
    <>
      <div className={styles.container}>
        <h1>Create a Random Name</h1>
        {isAdvanced && (
          <h2>
            <Advanced
              FNStartsWith={FNStartsWith}
              FNEndsWith={FNEndsWith}
              LNStartsWith={LNStartsWith}
              LNEndsWith={LNEndsWith}
              setFNStartsWith={setFNStartsWith}
              setFNEndsWith={setFNEndsWith}
              setLNStartsWith={setLNStartsWith}
              setLNEndsWith={setLNEndsWith}
            />
          </h2>
        )}
        <div className={styles.buttons}>
          <button
            onClick={() => {
              setIsAdvanced(!isAdvanced)
            }}
          >
            Advanced
          </button>
          <button className={styles.generateButton} onClick={generate}>
            Generate
          </button>
        </div>
      </div>
      <Result name={name} />
    </>
  )
}

export default Search
