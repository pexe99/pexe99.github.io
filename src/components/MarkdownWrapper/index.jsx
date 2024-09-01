import React from "react"
import { MarkdownStyler } from "./MarkdownStyler"
import PrismStyler from "./PrismStyler"

const MarkdownWrapper = ({ html }) => {
  return (
    <>
      <PrismStyler />
      <MarkdownStyler
        className="markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}

export default MarkdownWrapper
