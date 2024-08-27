import React, { useState, useEffect } from "react"
import { MarkdownStyler } from "./MarkdownStyler"

const MarkdownWrapper = ({ html }) => {
  return (
    <>
      <MarkdownStyler
        className="markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}

export default MarkdownWrapper
