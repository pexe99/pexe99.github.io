import React from "react"
import { MarkdownStyler } from "./MarkdownStyler"

const MarkdownWrapper = ({ html }) => {
  return (
    <>
      <MarkdownStyler dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export default MarkdownWrapper
