import React, { useState, useEffect } from "react"
import { MarkdownStyler } from "./MarkdownStyler"
import TOC from "../TOC"

const MarkdownWrapper = ({ html }) => {
  const [toc, setToc] = useState([])

  useEffect(() => {
    setToc(
      Array.from(
        document.querySelectorAll(
          ".markdown > h1, .markdown > h2, .markdown > h3"
        )
      )
    )
  }, [])

  console.log(toc)
  return (
    <>
      <TOC type="toc" innerText={toc} />
      <MarkdownStyler
        className="markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}

export default MarkdownWrapper
