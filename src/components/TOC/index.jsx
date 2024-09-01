import React, { useState, useEffect } from "react"
import TocBar from "./TocBar"
import TocCallout from "./TocCallout"

const Toc = () => {
  const [tocData, setTocData] = useState([])

  useEffect(() => {
    const tocElements = Array.from(
      document.querySelectorAll(
        ".markdown > h1, .markdown > h2, .markdown > h3"
      )
    )

    const generatedTocData = generateTocData(tocElements)
    setTocData(generatedTocData)
  }, [])

  const handleClickLink = id => {
    window.location.hash = null
    window.location.hash = id
  }

  const generateTocData = items => {
    let previousLevel = -1
    let tocArray = []

    items.forEach((item, index) => {
      let currentLevel = parseInt(item.localName.match(/\d+/)[0], 10)

      if (currentLevel > 1) {
        if (previousLevel === -1) {
          currentLevel = 1
        } else if (currentLevel < previousLevel) {
          previousLevel = currentLevel
        } else if (currentLevel > previousLevel) {
          currentLevel = ++previousLevel
        }
      } else {
        previousLevel = 1
      }

      const tocItem = {
        id: item.id,
        text: item.innerText,
        level: currentLevel,
      }

      tocArray.push(tocItem)
    })

    return tocArray
  }

  return (
    <>
      <TocBar tocData={tocData} handleClickLink={handleClickLink} />
      <TocCallout tocData={tocData} handleClickLink={handleClickLink} />
    </>
  )
}

export default Toc
